import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import Footer from "@/components/Footer";

export default function OrganisingCommittee() {
  return (
    <div className="min-h-screen bg-white">
      <ImportantDatesBanner />
      <Header />
      <div className="pt-8">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Organising Committee
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Leadership and Coordination of the Conference
            </p>
          </div>

          <div className="space-y-12">
            <section className="bg-white border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Committee Overview
              </h2>
              <p className="text-base text-black leading-relaxed mb-4">
                The Organising Committee comprises distinguished academics, scholars, and institutional leaders who are responsible for the overall planning, coordination, and execution of the Ekatma Manav Darshan Conference.
              </p>
              <p className="text-base text-black leading-relaxed">
                Working in collaboration with host institutions and knowledge partners, the committee ensures that the conference meets the highest standards of academic excellence and logistical efficiency.
              </p>
            </section>

            <section className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8 border border-primary-200">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Committee Responsibilities
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-2xl text-secondary">✓</span>
                  <div>
                    <p className="font-bold text-foreground mb-1">Academic Program Design</p>
                    <p className="text-base text-black">Curating the conference sessions, keynote speakers, and research presentations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl text-secondary">✓</span>
                  <div>
                    <p className="font-bold text-foreground mb-1">Peer Review Process</p>
                    <p className="text-base text-black">Overseeing the selection and evaluation of submitted papers</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl text-secondary">✓</span>
                  <div>
                    <p className="font-bold text-foreground mb-1">Logistics & Coordination</p>
                    <p className="text-base text-black">Managing venue arrangements, scheduling, and conference operations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl text-secondary">✓</span>
                  <div>
                    <p className="font-bold text-foreground mb-1">Quality Assurance</p>
                    <p className="text-base text-black">Maintaining academic standards and ensuring exceptional participant experience</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl text-secondary">✓</span>
                  <div>
                    <p className="font-bold text-foreground mb-1">Partnership Management</p>
                    <p className="text-base text-black">Coordinating with institutional partners and international collaborators</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Committee Members
              </h2>
              <p className="text-base text-muted-foreground">
                Detailed information about committee members and their affiliations will be available shortly.
              </p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-16 border-t border-border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Get Involved</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Participate in this premier academic event and be part of a global discourse on civilizational philosophy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/call-for-papers"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
              >
                Call for Papers
              </Link>
              <Link
                to="/registration"
                className="px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
