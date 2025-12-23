import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SubmitPaper() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to Call for Papers section after 2 seconds
    const timer = setTimeout(() => {
      navigate("/#papers");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="container max-w-2xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Submit Your Paper
          </h1>
          <p className="text-lg text-black mb-8">
            All paper submissions for this conference are now managed through the Microsoft Conference Management Toolkit (CMT).
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-primary-50 p-8 rounded-lg border border-primary-200">
              <h2 className="text-2xl font-bold text-primary mb-4">Ready to Submit?</h2>
              <p className="text-black mb-6">
                Follow these steps to submit your paper:
              </p>
              <ol className="text-left space-y-4 mb-8 max-w-xl mx-auto">
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">1.</span>
                  <span className="text-black">
                    Create or log in to your CMT account
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">2.</span>
                  <span className="text-black">
                    Navigate to the Ekatma Manav Darshan conference
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">3.</span>
                  <span className="text-black">
                    Fill in your paper details and upload your manuscript
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">4.</span>
                  <span className="text-black">
                    Submit before the deadline: 25 February 2026
                  </span>
                </li>
              </ol>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Create CMT Account
                </a>
                <a
                  href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white text-primary font-semibold rounded-lg border border-primary hover:bg-primary-50 transition-colors"
                >
                  Submission Guide
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-border">
              <p className="text-sm text-black">
                <strong>Redirecting you to Call for Papers in a moment...</strong>
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/#papers")}
            className="px-6 py-2 bg-gray-200 text-foreground font-semibold rounded-lg hover:bg-gray-300 transition-colors"
          >
            Go Back to Call for Papers
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
