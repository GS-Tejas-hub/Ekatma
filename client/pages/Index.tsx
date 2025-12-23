import Header from "@/components/Header";
import TopRightCountdown from "@/components/TopRightCountdown";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImportantDatesSection from "@/components/ImportantDatesSection";
import CallForPapersSection from "@/components/CallForPapersSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <TopRightCountdown />
      <ImportantDatesBanner />
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
