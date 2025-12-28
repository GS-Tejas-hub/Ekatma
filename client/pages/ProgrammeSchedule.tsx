import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import Footer from "@/components/Footer";

export default function ProgrammeSchedule() {
  return (
    <div className="min-h-screen bg-white">
      <ImportantDatesBanner />
      <Header />
      <div className="pt-8">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Programme Schedule
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ekatma Manav Darshan Conference | 25–27 March 2026
            </p>
          </div>

          <div className="bg-white border border-border rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Conference Overview
            </h2>
            <p className="text-base text-black leading-relaxed mb-4">
              The three-day Ekatma Manav Darshan Conference will feature keynote
              addresses, research paper presentations, panel discussions, and
              networking sessions. The program is designed to facilitate
              comprehensive intellectual engagement on the philosophy of Ekatma
              Manav Darshan and its contemporary applications.
            </p>
            <p className="text-base text-muted-foreground">
              Detailed schedule with session timings, speaker names, and venue
              information will be announced shortly.
            </p>
          </div>

          <section className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8 border border-primary-200 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Conference Dates & Timing
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
                <p className="font-bold text-foreground mb-2">
                  Day 1: 25 March 2026
                </p>
                <p className="text-base text-black">
                  Registration, inaugural ceremony, and keynote address
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-secondary">
                <p className="font-bold text-foreground mb-2">
                  Day 2: 26 March 2026
                </p>
                <p className="text-base text-black">
                  Research presentations, panel discussions, and themed sessions
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-accent">
                <p className="font-bold text-foreground mb-2">
                  Day 3: 27 March 2026
                </p>
                <p className="text-base text-black">
                  Concluding sessions, synthesizing remarks, and closing
                  ceremony
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white border border-border rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Session Format
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-2xl text-secondary">✓</span>
                <div>
                  <p className="font-bold text-foreground mb-1">
                    Keynote Addresses (60 min)
                  </p>
                  <p className="text-base text-black">
                    Plenary sessions featuring eminent scholars
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl text-secondary">✓</span>
                <div>
                  <p className="font-bold text-foreground mb-1">
                    Research Presentations (10 min)
                  </p>
                  <p className="text-base text-black">
                    Author presentations with Q&A
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl text-secondary">✓</span>
                <div>
                  <p className="font-bold text-foreground mb-1">
                    Panel Discussions (90 min)
                  </p>
                  <p className="text-base text-black">
                    Focused discussions on specific themes
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl text-secondary">✓</span>
                <div>
                  <p className="font-bold text-foreground mb-1">
                    Networking Sessions
                  </p>
                  <p className="text-base text-black">
                    Informal gatherings for scholarly exchange
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-16 pt-16 border-t border-border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Mark Your Calendar
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Register now and plan your attendance at this premier academic
              conference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/registration"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
              >
                Register Now
              </Link>
              <Link
                to="/speakers"
                className="px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                View Speakers
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
