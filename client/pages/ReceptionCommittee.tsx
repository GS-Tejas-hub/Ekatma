import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import Footer from "@/components/Footer";

export default function ReceptionCommittee() {
  return (
    <div className="min-h-screen bg-white">
      <ImportantDatesBanner />
      <Header />
      <div className="pt-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Reception Committee
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your Experience is Our Priority
            </p>
          </div>

          <div className="bg-white border border-border rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              About the Reception Committee
            </h2>
            <p className="text-base text-black leading-relaxed mb-4">
              The Reception Committee is dedicated to ensuring a seamless and welcoming experience for all conference participants. From registration and accommodation assistance to venue orientation and logistics support, our team is committed to making your attendance memorable.
            </p>
            <p className="text-base text-black leading-relaxed">
              Whether you have questions about the venue, need assistance with transportation, or require any other support during the conference, the Reception Committee is here to help.
            </p>
          </div>

          <section className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8 border border-primary-200 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              How We Can Help
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-3">Registration Support</h3>
                <p className="text-base text-black">
                  Assistance with conference registration, badge collection, and material distribution.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-3">Accommodation</h3>
                <p className="text-base text-black">
                  Help with hotel arrangements and recommendations for comfortable lodging.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-3">Transportation</h3>
                <p className="text-base text-black">
                  Guidance on local transportation, airport pickups, and venue access.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-3">General Inquiries</h3>
                <p className="text-base text-black">
                  Answer to any questions about the conference schedule and logistics.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-16 pt-16 border-t border-border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Register Today</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us at the Ekatma Manav Darshan Conference and experience world-class hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/registration"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
              >
                Register Now
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
