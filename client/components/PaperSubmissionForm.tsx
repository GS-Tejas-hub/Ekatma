import { useState } from "react";
import { Plus, Trash2, Upload } from "lucide-react";

interface Author {
  id: string;
  name: string;
  affiliation: string;
  email: string;
  isCorresponding: boolean;
}

export default function PaperSubmissionForm() {
  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    keywords: "",
    category: "",
    authors: [
      {
        id: "1",
        name: "",
        affiliation: "",
        email: "",
        isCorresponding: true,
      },
    ] as Author[],
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAuthorChange = (
    id: string,
    field: keyof Author,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      authors: prev.authors.map((author) =>
        author.id === id ? { ...author, [field]: value } : author
      ),
    }));
  };

  const addAuthor = () => {
    const newId = Date.now().toString();
    setFormData((prev) => ({
      ...prev,
      authors: [
        ...prev.authors,
        {
          id: newId,
          name: "",
          affiliation: "",
          email: "",
          isCorresponding: false,
        },
      ],
    }));
  };

  const removeAuthor = (id: string) => {
    if (formData.authors.length === 1) {
      setError("At least one author is required");
      return;
    }
    setFormData((prev) => ({
      ...prev,
      authors: prev.authors.filter((author) => author.id !== id),
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.title.trim()) {
      setError("Paper title is required");
      return false;
    }
    if (formData.title.length < 10) {
      setError("Paper title must be at least 10 characters");
      return false;
    }
    if (!formData.abstract.trim()) {
      setError("Abstract is required");
      return false;
    }
    if (formData.abstract.length < 100) {
      setError("Abstract must be at least 100 characters");
      return false;
    }
    if (formData.abstract.length > 500) {
      setError("Abstract must not exceed 500 characters");
      return false;
    }
    if (!formData.category) {
      setError("Please select a research category");
      return false;
    }

    // Validate authors
    for (const author of formData.authors) {
      if (!author.name.trim()) {
        setError("All author names are required");
        return false;
      }
      if (!author.affiliation.trim()) {
        setError("All author affiliations are required");
        return false;
      }
      if (!author.email.trim() || !author.email.includes("@")) {
        setError("Valid email addresses are required for all authors");
        return false;
      }
    }

    // Check at least one corresponding author
    if (!formData.authors.some((a) => a.isCorresponding)) {
      setError("Please designate at least one corresponding author");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-paper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit paper");
      }

      setSubmitted(true);
      setFormData({
        title: "",
        abstract: "",
        keywords: "",
        category: "",
        authors: [
          {
            id: "1",
            name: "",
            affiliation: "",
            email: "",
            isCorresponding: true,
          },
        ],
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred during submission"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    "Philosophical Foundations",
    "Purushartha Framework",
    "Dharma-Centric Society",
    "Economic Thought",
    "Governance & Leadership",
    "Technology & Consciousness",
    "Education & Knowledge",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Submit Your Paper
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete the form below to submit your research paper for consideration
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-semibold">
              ✓ Paper submitted successfully!
            </p>
            <p className="text-sm text-green-700 mt-2">
              You will receive a confirmation email shortly. We will review your paper
              and notify you of the outcome.
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-semibold">Error</p>
            <p className="text-sm text-red-700 mt-2">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Paper Details */}
          <div className="bg-gray-50 rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Paper Details
            </h3>

            {/* Title */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Paper Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter the title of your paper (10-200 characters)"
                maxLength={200}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {formData.title.length} / 200 characters
              </p>
            </div>

            {/* Abstract */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Abstract <span className="text-red-500">*</span>
              </label>
              <textarea
                name="abstract"
                value={formData.abstract}
                onChange={handleInputChange}
                placeholder="Enter your abstract (100-500 words)"
                rows={6}
                maxLength={500}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {formData.abstract.length} / 500 characters
              </p>
            </div>

            {/* Keywords */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Keywords (comma-separated)
              </label>
              <input
                type="text"
                name="keywords"
                value={formData.keywords}
                onChange={handleInputChange}
                placeholder="e.g. Dharma, Philosophy, Governance"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Research Category <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a category...</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Authors Section */}
          <div className="bg-gray-50 rounded-lg p-8 border border-border">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-foreground">
                Authors & Affiliations
              </h3>
              <button
                type="button"
                onClick={addAuthor}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-semibold"
              >
                <Plus size={16} />
                Add Author
              </button>
            </div>

            <div className="space-y-6">
              {formData.authors.map((author, idx) => (
                <div
                  key={author.id}
                  className="bg-white border border-border rounded-lg p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-semibold text-foreground">
                      Author {idx + 1}
                    </h4>
                    {formData.authors.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeAuthor(author.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={author.name}
                        onChange={(e) =>
                          handleAuthorChange(author.id, "name", e.target.value)
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={author.email}
                        onChange={(e) =>
                          handleAuthorChange(author.id, "email", e.target.value)
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                  </div>

                  {/* Affiliation */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Affiliation/Institution{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={author.affiliation}
                      onChange={(e) =>
                        handleAuthorChange(
                          author.id,
                          "affiliation",
                          e.target.value
                        )
                      }
                      placeholder="University/Institution Name"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>

                  {/* Corresponding Author */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={author.isCorresponding}
                      onChange={(e) =>
                        handleAuthorChange(
                          author.id,
                          "isCorresponding",
                          e.target.checked
                        )
                      }
                      className="w-4 h-4 rounded border-border"
                    />
                    <span className="text-sm font-medium text-foreground">
                      Corresponding Author
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
            <h4 className="font-semibold text-primary mb-3">Submission Guidelines</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✓ Abstract should be 100-500 words</li>
              <li>✓ Final paper should be 5,000-7,000 words</li>
              <li>✓ Follow APA citation style</li>
              <li>✓ Selected papers will be published in JICPR journal</li>
              <li>✓ All authors must be listed with affiliations</li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⏳</span>
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Upload size={18} />
                  Submit Paper
                </span>
              )}
            </button>
            <button
              type="reset"
              className="px-8 py-4 border-2 border-border text-foreground font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear Form
            </button>
          </div>
        </form>

        {/* Info Box */}
        <div className="mt-12 bg-secondary-50 border border-secondary-200 rounded-lg p-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Questions?</span> Contact
            Dr. Niranjan B Poojar at{" "}
            <a
              href="tel:+919164582650"
              className="text-secondary hover:underline font-semibold"
            >
              +91 9164582650
            </a>{" "}
            or email{" "}
            <a
              href="mailto:thebharatsworldview@gmail.com"
              className="text-secondary hover:underline font-semibold"
            >
              thebharatsworldview@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
