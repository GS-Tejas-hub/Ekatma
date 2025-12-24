import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import AboutSection from "@/components/AboutSection";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <ImportantDatesBanner />
      <Header />
      <div className="pt-8">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}
