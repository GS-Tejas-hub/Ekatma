import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import ContactSection from "@/components/ContactSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <ImportantDatesBanner />
      <Header />
      <div className="pt-8">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
