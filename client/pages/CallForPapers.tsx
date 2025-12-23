import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopRightCountdown from "@/components/TopRightCountdown";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import CallForPapersSection from "@/components/CallForPapersSection";

export default function CallForPapers() {
  return (
    <div className="min-h-screen bg-white">
      <TopRightCountdown />
      <ImportantDatesBanner />
      <Header />
      <div className="pt-20">
        <CallForPapersSection />
      </div>
      <Footer />
    </div>
  );
}
