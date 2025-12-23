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
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Conference Coordinator
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-black font-semibold mb-1">Name</p>
                  <p className="text-black">Dr. Niranjan B Poojar</p>
                </div>
                <div>
                  <p className="text-sm text-black font-semibold mb-1">Phone</p>
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
                  <p className="text-black">25-27 March 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Subject <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary resize-none"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
