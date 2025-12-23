import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImportantDatesSection from "@/components/ImportantDatesSection";
import CallForPapersSection from "@/components/CallForPapersSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ImportantDatesSection />
      <CallForPapersSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
}
