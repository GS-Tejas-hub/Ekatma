import { Link } from "react-router-dom";

export default function HostInstitution() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Host Institution
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            About Our Host and Organizing Partners
          </p>
        </div>

        <div className="space-y-12">
          <section className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8 border border-primary-200">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Karnataka State Open University
            </h2>
            <p className="text-base text-black leading-relaxed mb-4">
              Karnataka State Open University (KSOU), established in 1996, is a premier distance education institution in India. KSOU is committed to providing quality education and fostering academic excellence across diverse disciplines.
            </p>
            <p className="text-base text-black leading-relaxed">
              As the host institution for the Ekatma Manav Darshan Conference, KSOU brings its expertise in academic governance, international collaboration, and institutional excellence to create a world-class conference experience.
            </p>
          </section>

          <section className="bg-white border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Partner Organizations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Prajna Pravah</h3>
                <p className="text-base text-black leading-relaxed">
                  A knowledge organization dedicated to building civilizational narratives and fostering intellectual discourse on Indic thought and values.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-3">Dr. Syama Prasad Mookerjee Research Foundation</h3>
                <p className="text-base text-black leading-relaxed">
                  An organization committed to research and scholarship in Indian civilization, culture, and philosophical traditions.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Conference Venue
            </h2>
            <p className="text-base text-black leading-relaxed mb-4">
              The conference will be held at Karnataka State Open University in Mysore, providing state-of-the-art facilities and a conducive academic environment for scholars and researchers from around the world.
            </p>
            <p className="text-base text-muted-foreground">
              Mysore is a historic city renowned for its cultural heritage and hospitality. Venue details and accommodation information will be provided to registered participants.
            </p>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-16 border-t border-border text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Join Us</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of this prestigious conference and connect with scholars and thought leaders worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/registration"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
            >
              Register Now
            </Link>
            <Link
              to="/venue-travel"
              className="px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Venue & Travel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
