import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import CallForPapersSection from "@/components/CallForPapersSection";

export default function CallForPapers() {
  return (
    <div className="min-h-screen bg-white">
      <ImportantDatesBanner />
      <Header />
      <div className="pt-8">
        <CallForPapersSection />
      </div>
      <Footer />
    </div>
  );
}
