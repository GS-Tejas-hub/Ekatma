import { RequestHandler } from "express";
import fs from "fs";
import path from "path";

interface Author {
  id: string;
  name: string;
  affiliation: string;
  email: string;
  isCorresponding: boolean;
}

interface PaperSubmission {
  id: string;
  title: string;
  abstract: string;
  keywords: string;
  category: string;
  authors: Author[];
  submittedAt: string;
}

const SUBMISSIONS_FILE = path.join(process.cwd(), "data", "submissions.json");

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.dirname(SUBMISSIONS_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Get all submissions
const getSubmissions = (): PaperSubmission[] => {
  ensureDataDir();
  if (!fs.existsSync(SUBMISSIONS_FILE)) {
    return [];
  }
  try {
    const data = fs.readFileSync(SUBMISSIONS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
};

// Save submissions
const saveSubmissions = (submissions: PaperSubmission[]) => {
  ensureDataDir();
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
};

// Handle paper submission
export const handlePaperSubmission: RequestHandler = (req, res) => {
  try {
    const { title, abstract, keywords, category, authors } = req.body;

    // Validation
    if (!title || !abstract || !category || !authors || authors.length === 0) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    // Create submission object
    const submission: PaperSubmission = {
      id: `PAPER-${Date.now()}`,
      title,
      abstract,
      keywords,
      category,
      authors,
      submittedAt: new Date().toISOString(),
    };

    // Get existing submissions
    const submissions = getSubmissions();

    // Add new submission
    submissions.push(submission);

    // Save submissions
    saveSubmissions(submissions);

    // Return success response
    res.status(201).json({
      message: "Paper submitted successfully",
      submissionId: submission.id,
    });
  } catch (error) {
    console.error("Paper submission error:", error);
    res.status(500).json({ error: "Failed to submit paper" });
  }
};

// Get all submissions (for admin)
export const handleGetSubmissions: RequestHandler = (req, res) => {
  try {
    const submissions = getSubmissions();
    res.json({ count: submissions.length, submissions });
  } catch (error) {
    console.error("Error retrieving submissions:", error);
    res.status(500).json({ error: "Failed to retrieve submissions" });
  }
};

// Export submissions as CSV
export const handleExportCSV: RequestHandler = (req, res) => {
  try {
    const submissions = getSubmissions();

    if (submissions.length === 0) {
      res.status(404).json({ error: "No submissions found" });
      return;
    }

    // Create CSV header
    let csv = "Submission ID,Paper Title,Category,Authors (Names),Authors (Emails),Authors (Affiliations),Abstract,Keywords,Submitted Date\n";

    // Add submission data
    submissions.forEach((submission) => {
      const authors = submission.authors
        .map((a) => a.name)
        .join("; ");
      const emails = submission.authors
        .map((a) => a.email)
        .join("; ");
      const affiliations = submission.authors
        .map((a) => a.affiliation)
        .join("; ");

      // Escape CSV fields
      const escapeCSV = (field: string) =>
        `"${field.replace(/"/g, '""')}"`;

      csv += `${escapeCSV(submission.id)},`;
      csv += `${escapeCSV(submission.title)},`;
      csv += `${escapeCSV(submission.category)},`;
      csv += `${escapeCSV(authors)},`;
      csv += `${escapeCSV(emails)},`;
      csv += `${escapeCSV(affiliations)},`;
      csv += `${escapeCSV(submission.abstract)},`;
      csv += `${escapeCSV(submission.keywords)},`;
      csv += `${escapeCSV(submission.submittedAt)}\n`;
    });

    // Set response headers
    res.setHeader("Content-Type", "text/csv");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="submissions-${Date.now()}.csv"`
    );

    res.send(csv);
  } catch (error) {
    console.error("Error exporting CSV:", error);
    res.status(500).json({ error: "Failed to export submissions" });
  }
};

// Export detailed JSON for import/processing
export const handleExportJSON: RequestHandler = (req, res) => {
  try {
    const submissions = getSubmissions();

    if (submissions.length === 0) {
      res.status(404).json({ error: "No submissions found" });
      return;
    }

    res.setHeader("Content-Type", "application/json");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="submissions-${Date.now()}.json"`
    );

    res.json(submissions);
  } catch (error) {
    console.error("Error exporting JSON:", error);
    res.status(500).json({ error: "Failed to export submissions" });
  }
};

// Delete a submission (for admin)
export const handleDeleteSubmission: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;

    const submissions = getSubmissions();
    const filtered = submissions.filter((s) => s.id !== id);

    if (filtered.length === submissions.length) {
      res.status(404).json({ error: "Submission not found" });
      return;
    }

    saveSubmissions(filtered);
    res.json({ message: "Submission deleted successfully" });
  } catch (error) {
    console.error("Error deleting submission:", error);
    res.status(500).json({ error: "Failed to delete submission" });
  }
};
