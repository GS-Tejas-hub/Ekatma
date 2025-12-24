export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Get in touch with us for any questions about the conference
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto">
          {/* Contact Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-primary-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                Conference Coordinator
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">Name</p>
                  <p className="text-base font-semibold text-foreground">Dr. Punith Raj K N</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">Phone</p>
                  <p className="text-base text-black">
                    <a href="tel:+919845537663" className="text-primary font-semibold hover:underline">
                      +91 98455 37663
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-secondary-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Paper Submissions Coordinator
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">Name</p>
                  <p className="text-base font-semibold text-foreground">Dr. Niranjan B Poojar</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">Phone</p>
                  <p className="text-base text-black">
                    <a href="tel:+919164582650" className="text-primary font-semibold hover:underline">
                      +91 9164582650
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Paper Submissions
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">Submission Method</p>
                  <p className="text-base text-black">
                    Microsoft Conference Management Toolkit (CMT)
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">Deadline</p>
                  <p className="text-base text-black font-semibold">25 February 2026</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Conference Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">Location</p>
                  <p className="text-base text-black">Mysore, Karnataka, India</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-1">Dates</p>
                  <p className="text-base text-black">25–27 March 2026</p>
                </div>
              </div>
            </div>

        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-16 border-t border-border text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Next Steps</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to participate in the conference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/call-for-papers"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
            >
              Submit a Paper
            </a>
            <a
              href="/registration"
              className="px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
