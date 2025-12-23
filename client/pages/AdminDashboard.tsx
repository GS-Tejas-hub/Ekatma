import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, Eye, Trash2, Cloud, Check, AlertCircle } from "lucide-react";

interface Author {
  id: string;
  name: string;
  affiliation: string;
  email: string;
  isCorresponding: boolean;
}

interface Submission {
  id: string;
  title: string;
  abstract: string;
  keywords: string;
  category: string;
  authors: Author[];
  submittedAt: string;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isUploadingGoogleDrive, setIsUploadingGoogleDrive] = useState(false);
  const [googleDriveSuccess, setGoogleDriveSuccess] = useState("");
  const [googleDriveError, setGoogleDriveError] = useState("");

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/admin/submissions");
      if (!response.ok) throw new Error("Failed to load submissions");
      const data = await response.json();
      setSubmissions(data.submissions || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load submissions");
    } finally {
      setIsLoading(false);
    }
  };

  const handleExportCSV = async () => {
    try {
      const response = await fetch("/api/admin/submissions/export/csv");
      if (!response.ok) throw new Error("Failed to export CSV");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `paper-submissions-${new Date().toISOString().split("T")[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to export CSV");
    }
  };

  const handleExportJSON = async () => {
    try {
      const response = await fetch("/api/admin/submissions/export/json");
      if (!response.ok) throw new Error("Failed to export JSON");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `paper-submissions-${new Date().toISOString().split("T")[0]}.json`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to export JSON");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;

    try {
      const response = await fetch(`/api/admin/submissions/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete submission");
      loadSubmissions();
      if (selectedSubmission?.id === id) setSelectedSubmission(null);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete submission");
    }
  };

  const handleUploadToGoogleDrive = async (format: "csv" | "json") => {
    setIsUploadingGoogleDrive(true);
    setGoogleDriveError("");
    setGoogleDriveSuccess("");

    try {
      // First, get the data to export
      let csvContent = "";

      if (format === "csv") {
        // Generate CSV content
        let csv =
          "Submission ID,Paper Title,Category,Authors (Names),Authors (Emails),Authors (Affiliations),Abstract,Keywords,Submitted Date\n";

        submissions.forEach((submission) => {
          const authors = submission.authors.map((a) => a.name).join("; ");
          const emails = submission.authors.map((a) => a.email).join("; ");
          const affiliations = submission.authors
            .map((a) => a.affiliation)
            .join("; ");

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

        csvContent = csv;
      }

      // Upload to Google Drive
      const response = await fetch(`/api/admin/google-drive/upload-${format}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          csvContent: format === "csv" ? csvContent : undefined,
          jsonContent:
            format === "json"
              ? JSON.stringify(submissions, null, 2)
              : undefined,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || "Failed to upload to Google Drive");
      }

      const data = await response.json();
      setGoogleDriveSuccess(
        `✅ Successfully uploaded to Google Drive! File: ${data.file.name}`
      );

      // Auto-clear success message after 5 seconds
      setTimeout(() => setGoogleDriveSuccess(""), 5000);
    } catch (err) {
      setGoogleDriveError(
        err instanceof Error ? err.message : "Failed to upload to Google Drive"
      );
    } finally {
      setIsUploadingGoogleDrive(false);
    }
  };

  const filteredSubmissions = submissions.filter((sub) =>
    sub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.authors.some((a) =>
      a.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Submissions Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage and review all submitted papers
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 border border-border">
            <p className="text-muted-foreground text-sm mb-2">Total Submissions</p>
            <p className="text-3xl font-bold text-primary">{submissions.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-border">
            <p className="text-muted-foreground text-sm mb-2">Authors</p>
            <p className="text-3xl font-bold text-secondary">
              {submissions.reduce((acc, sub) => acc + sub.authors.length, 0)}
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-border">
            <p className="text-muted-foreground text-sm mb-2">Categories</p>
            <p className="text-3xl font-bold text-accent">
              {new Set(submissions.map((s) => s.category)).size}
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-border">
            <p className="text-muted-foreground text-sm mb-2">Last Submission</p>
            <p className="text-sm font-semibold text-foreground">
              {submissions.length > 0
                ? new Date(
                    submissions[submissions.length - 1].submittedAt
                  ).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
        </div>

        {/* Export Buttons & Search */}
        <div className="bg-white rounded-lg p-6 border border-border mb-8">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Search by paper title or author name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Export & Google Drive Buttons */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={handleExportCSV}
                  disabled={submissions.length === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
                >
                  <Download size={18} />
                  Export CSV
                </button>
                <button
                  onClick={handleExportJSON}
                  disabled={submissions.length === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-600 transition-colors disabled:opacity-50"
                >
                  <Download size={18} />
                  Export JSON
                </button>
              </div>

              <div className="flex gap-3 flex-wrap md:ml-auto">
                <button
                  onClick={() => handleUploadToGoogleDrive("csv")}
                  disabled={submissions.length === 0 || isUploadingGoogleDrive}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                >
                  <Cloud size={18} />
                  {isUploadingGoogleDrive ? "Uploading..." : "Upload CSV to Drive"}
                </button>
                <button
                  onClick={() => handleUploadToGoogleDrive("json")}
                  disabled={submissions.length === 0 || isUploadingGoogleDrive}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                >
                  <Cloud size={18} />
                  {isUploadingGoogleDrive ? "Uploading..." : "Upload JSON to Drive"}
                </button>
              </div>
            </div>

            {/* Status Messages */}
            {googleDriveSuccess && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <Check className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold text-green-900">{googleDriveSuccess}</p>
                  <p className="text-sm text-green-700 mt-1">
                    Your data is now accessible in Google Drive!
                  </p>
                </div>
              </div>
            )}

            {googleDriveError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold text-red-900">Upload Failed</p>
                  <p className="text-sm text-red-700 mt-1">{googleDriveError}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Submissions List */}
          <div className="lg:col-span-2">
            {isLoading ? (
              <div className="bg-white rounded-lg p-8 border border-border text-center">
                <p className="text-muted-foreground">Loading submissions...</p>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-red-800 font-semibold">Error</p>
                <p className="text-sm text-red-700 mt-2">{error}</p>
              </div>
            ) : filteredSubmissions.length === 0 ? (
              <div className="bg-white rounded-lg p-8 border border-border text-center">
                <p className="text-muted-foreground">
                  {submissions.length === 0
                    ? "No submissions yet"
                    : "No matching submissions found"}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredSubmissions.map((submission) => (
                  <div
                    key={submission.id}
                    className={`bg-white rounded-lg border-2 p-6 cursor-pointer transition-all ${
                      selectedSubmission?.id === submission.id
                        ? "border-primary shadow-lg"
                        : "border-border hover:border-primary-200"
                    }`}
                    onClick={() => setSelectedSubmission(submission)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-primary mb-1">
                          {submission.id}
                        </p>
                        <h3 className="font-bold text-foreground text-lg mb-2">
                          {submission.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 bg-primary-50 text-primary text-xs font-semibold rounded-full">
                            {submission.category}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 text-foreground text-xs font-medium rounded-full">
                            {submission.authors.length} author{submission.authors.length !== 1 ? "s" : ""}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Authors:</strong>{" "}
                          {submission.authors
                            .map((a) => a.name)
                            .join(", ")}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Submitted: {new Date(submission.submittedAt).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(submission.id);
                        }}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
            {selectedSubmission ? (
              <div className="bg-white rounded-lg border border-border p-6 sticky top-20 max-h-[calc(100vh-100px)] overflow-y-auto">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Submission Details
                </h3>

                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                      Paper Title
                    </p>
                    <p className="font-semibold text-foreground">
                      {selectedSubmission.title}
                    </p>
                  </div>

                  {/* Category */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                      Category
                    </p>
                    <p className="px-3 py-1 bg-primary-50 text-primary text-xs font-semibold rounded-full inline-block">
                      {selectedSubmission.category}
                    </p>
                  </div>

                  {/* Abstract */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                      Abstract
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedSubmission.abstract}
                    </p>
                  </div>

                  {/* Keywords */}
                  {selectedSubmission.keywords && (
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                        Keywords
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {selectedSubmission.keywords}
                      </p>
                    </div>
                  )}

                  {/* Authors */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-3">
                      Authors & Affiliations
                    </p>
                    <div className="space-y-3">
                      {selectedSubmission.authors.map((author, idx) => (
                        <div
                          key={author.id}
                          className="bg-gray-50 rounded-lg p-3 border border-border text-sm"
                        >
                          <p className="font-semibold text-foreground">
                            {author.name}
                            {author.isCorresponding && (
                              <span className="ml-2 text-xs bg-secondary text-white px-2 py-0.5 rounded">
                                Corresponding
                              </span>
                            )}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {author.affiliation}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {author.email}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submission Date */}
                  <div className="border-t border-border pt-6">
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                      Submitted
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {new Date(selectedSubmission.submittedAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-border p-6 text-center">
                <Eye size={32} className="mx-auto text-muted-foreground mb-3 opacity-50" />
                <p className="text-muted-foreground">
                  Select a submission to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
