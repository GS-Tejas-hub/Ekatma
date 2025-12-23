import Header from "@/components/Header";
import PaperSubmissionForm from "@/components/PaperSubmissionForm";
import Footer from "@/components/Footer";

export default function SubmitPaper() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PaperSubmissionForm />
      <Footer />
    </div>
  );
}
