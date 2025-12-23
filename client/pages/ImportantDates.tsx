import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopRightCountdown from "@/components/TopRightCountdown";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import ImportantDatesSection from "@/components/ImportantDatesSection";

export default function ImportantDates() {
  return (
    <div className="min-h-screen bg-white">
      <TopRightCountdown />
      <ImportantDatesBanner />
      <Header />
      <div className="pt-20">
        <ImportantDatesSection />
      </div>
      <Footer />
    </div>
  );
}
