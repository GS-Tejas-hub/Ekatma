import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallForPapersSection from "@/components/CallForPapersSection";

export default function CallForPapers() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <CallForPapersSection />
      </div>
      <Footer />
    </div>
  );
}
