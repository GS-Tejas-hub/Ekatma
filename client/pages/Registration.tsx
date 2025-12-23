import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationSection from "@/components/RegistrationSection";

export default function Registration() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <RegistrationSection />
      </div>
      <Footer />
    </div>
  );
}
