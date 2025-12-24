import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import ImportantDatesSection from "@/components/ImportantDatesSection";

export default function ImportantDates() {
  return (
    <div className="min-h-screen bg-white">
      <ImportantDatesBanner />
      <Header />
      <div className="pt-8">
        <ImportantDatesSection />
      </div>
      <Footer />
    </div>
  );
}
