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
        <div className="max-w-2xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Conference Coordinator
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-base text-black font-semibold mb-1">Name</p>
                  <p className="text-black">Dr. Niranjan B Poojar</p>
                </div>
                <div>
                  <p className="text-base text-black font-semibold mb-1">Phone</p>
                  <p className="text-black">
                    <a href="tel:+919164582650" className="text-primary hover:underline">
                      +91 9164582650
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Paper Submissions
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-black font-semibold mb-1">Submission Method</p>
                  <p className="text-black">
                    Microsoft Conference Management Toolkit (CMT)
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black font-semibold mb-1">Deadline</p>
                  <p className="text-black">25 February 2026</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Conference Details
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-black font-semibold mb-1">Location</p>
                  <p className="text-black">Mysore, India</p>
                </div>
                <div>
                  <p className="text-sm text-black font-semibold mb-1">Dates</p>
                  <p className="text-black">25-27 March 2026</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
