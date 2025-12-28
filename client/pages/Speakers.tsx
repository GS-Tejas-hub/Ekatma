import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import Footer from "@/components/Footer";

export default function Speakers() {
  return (
    <div className="min-h-screen bg-white">
      <ImportantDatesBanner />
      <Header />
      <div className="pt-8">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Keynote Speakers
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Distinguished Scholars and Thought Leaders
            </p>
          </div>

          <div className="bg-white border border-border rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Featured Speakers
            </h2>
            <p className="text-base text-black leading-relaxed mb-6">
              The Ekatma Manav Darshan Conference brings together renowned academics, philosophers, policymakers, and thought leaders from across the world to discuss the Philosophical Foundations and Civilizational Epistemology of Ekatma Manav Darshan and its contemporary relevance.
            </p>
            <p className="text-base text-muted-foreground">
              Detailed information about keynote speakers, their research interests, and presentation topics will be updated as confirmations are finalized.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-16 border-t border-border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Submit Your Research</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Present your work alongside distinguished scholars at this prestigious conference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/call-for-papers"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
              >
                Call for Papers
              </Link>
              <Link
                to="/programme-schedule"
                className="px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Programme Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
