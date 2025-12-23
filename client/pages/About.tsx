import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopRightCountdown from "@/components/TopRightCountdown";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import AboutSection from "@/components/AboutSection";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <TopRightCountdown />
      <ImportantDatesBanner />
      <Header />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}
