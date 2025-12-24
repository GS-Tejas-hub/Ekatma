import Header from "@/components/Header";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <ImportantDatesBanner />
      <Header />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
