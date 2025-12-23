export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Ekatma</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              International Academic Conference on Bharat's Worldview.
              Commemorating 60 years of Pandit Deendayal Upadhyaya's historic
              lectures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Conference</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  About Conference
                </a>
              </li>
              <li>
                <a
                  href="#papers"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Call for Papers
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Register Now
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:thebharatsworldview@gmail.com"
                  className="hover:text-secondary transition-colors"
                >
                  thebharatsworldview@gmail.com
                </a>
              </li>
              <li>
                <p className="font-medium">Dr. Niranjan B Poojar</p>
                <a
                  href="tel:+919164582650"
                  className="hover:text-secondary transition-colors"
                >
                  +91 9164582650
                </a>
              </li>
              <li>
                <p className="font-medium">Location</p>
                <p>Mysore, India</p>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Conference Info</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <p className="font-medium text-white">Dates</p>
                <p>March 25-27, 2026</p>
              </li>
              <li>
                <p className="font-medium text-white">Venue</p>
                <p>Mysore, India</p>
              </li>
              <li>
                <p className="font-medium text-white">Submission</p>
                <p>Deadline: Feb 25, 2026</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          {/* Key Info Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="text-center sm:text-left">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                Published In
              </p>
              <p className="text-sm font-semibold">
                Journal of Indian Council of Philosophical Research (JICPR)
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Indexed in Web of Science & Scopus
              </p>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                In Collaboration With
              </p>
              <p className="text-sm font-semibold">Springer</p>
              <p className="text-xs text-gray-400 mt-1">
                Global Academic Publisher
              </p>
            </div>

            <div className="text-center sm:text-right">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                Supporting Organizations
              </p>
              <p className="text-sm font-semibold">
                ICPR & Research Institutions
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Promoting civilizational research
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-400 mb-6 md:mb-0">
              <p>
                © {currentYear} International Academic Conference on Ekatma
                Manav Darshan. All rights reserved.
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-secondary text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary text-sm transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary text-sm transition-colors"
              >
                Code of Conduct
              </a>
            </div>
          </div>
        </div>

        {/* Philosophy Statement */}
        <div className="mt-12 bg-gradient-to-r from-primary-900 to-slate-900 rounded-lg p-6 border border-primary-700">
          <p className="text-sm italic text-gray-200 leading-relaxed">
            "Ekatma Manav Darshan proposes a vision for restoring social harmony
            through Dharma—the ethical principle that sustains equilibrium in
            individual, social, ecological, and cosmic dimensions. Society is
            held not by the assertion of rights but by Kartavya: the mutual
            duties that arise from recognition of shared existence."
          </p>
          <p className="text-xs text-gray-400 mt-3">
            — Pandit Deendayal Upadhyaya
          </p>
        </div>
      </div>
    </footer>
  );
}
