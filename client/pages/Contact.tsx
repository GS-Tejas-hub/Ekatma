import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopRightCountdown from "@/components/TopRightCountdown";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import ContactSection from "@/components/ContactSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <TopRightCountdown />
      <ImportantDatesBanner />
      <Header />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
