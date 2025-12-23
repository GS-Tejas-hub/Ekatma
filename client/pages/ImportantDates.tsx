import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImportantDatesSection from "@/components/ImportantDatesSection";

export default function ImportantDates() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <ImportantDatesSection />
      </div>
      <Footer />
    </div>
  );
}
