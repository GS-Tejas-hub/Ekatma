export default function AboutSection() {
  const highlights = [
    {
      title: "Global Perspective",
      description:
        "An international forum exploring civilizational philosophy and its relevance to contemporary global challenges.",
      icon: "🌍",
    },
    {
      title: "Academic Rigor",
      description:
        "Peer-reviewed research published in Journal of Indian Council of Philosophical Research (JICPR), indexed in Web of Science and Scopus.",
      icon: "📚",
    },
    {
      title: "Interdisciplinary",
      description:
        "Bringing together philosophers, economists, technologists, educators, and policy leaders across disciplines.",
      icon: "🔗",
    },
    {
      title: "Civilizational Vision",
      description:
        "Revisiting Bharat's philosophical continuity as a framework for addressing modern crises: ethical, economic, and ecological.",
      icon: "🏛️",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About the Conference
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            An international academic forum commemorating 60 years of Pandit
            Deendayal Upadhyaya's historic lectures on Ekatma Manav Darshan
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">
              Understanding Ekatma Manav Darshan
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Ekatma Manav Darshan—the Darshan of the Integrated Universe—is a
              metaphysical worldview rooted in Rta, the cosmic order. It presents
              the human being as Ekatma: an indivisible unity of Sharira (body),
              Manas (mind), Buddhi (intellect), and Atma (soul).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Rather than a political ideology or sociological model, it is a
              civilizational framework articulated by Pandit Deendayal Upadhyaya
              in 1965, offering insights into harmonizing individual, social,
              ecological, and cosmic dimensions through Dharma.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In an age of fragmentation, loneliness, and erosion of trust, this
              worldview provides a path to restoring social harmony, ethical
              governance, sustainable prosperity, and spiritual fulfillment.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 border border-primary-100">
            <h3 className="text-xl font-bold text-primary mb-6">
              Key Philosophical Pillars
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Virat, Chiti, Rashtra", desc: "Civilizational consciousness" },
                { label: "Dharma Centric Order", desc: "Ethical social harmony" },
                {
                  label: "Purushartha Framework",
                  desc: "Integrated human aspiration",
                },
                { label: "Dharma Rajya", desc: "Moral governance" },
                {
                  label: "Artha Guided by Dharma",
                  desc: "Sustainable prosperity",
                },
                {
                  label: "Holistic Education",
                  desc: "Formation of complete human",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-secondary font-bold text-lg flex-shrink-0">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-base text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">{highlight.icon}</div>
              <h4 className="font-bold text-foreground mb-2">
                {highlight.title}
              </h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Publications & Indexing */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Publication & Indexing
          </h3>
          <p className="text-muted-foreground mb-8">
            Selected papers will be published in the Journal of Indian Council of Philosophical Research (JICPR), which is indexed in major databases and collaborated with Springer.
          </p>

          <div className="space-y-6">
            {/* Journal Information */}
            <div>
              <h4 className="font-bold text-foreground mb-3">Journal: Indian Council of Philosophical Research (JICPR)</h4>
              <p className="text-base text-muted-foreground mb-4">
                Published in collaboration with Springer | Official Publisher of ICPR
              </p>

              {/* Indexing Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <p className="font-semibold text-foreground mb-2">Indexed Databases</p>
                  <ul className="space-y-2 text-base text-muted-foreground">
                    <li>✓ Web of Science (ESCI)</li>
                    <li>✓ Scopus</li>
                    <li>✓ Scite.ai</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <p className="font-semibold text-foreground mb-2">Impact Metrics Available On</p>
                  <ul className="space-y-2 text-base text-muted-foreground">
                    <li>✓ Researcher</li>
                    <li>✓ SCImago Journal Rank (SJR)</li>
                    <li>✓ Crossref</li>
                  </ul>
                </div>
              </div>

              {/* Publishing Partners */}
              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <p className="font-semibold text-foreground mb-4">Publishing Partners & Indexing Services</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Springer",
                      desc: "Publisher",
                      icon: "📚",
                      color: "bg-red-50"
                    },
                    {
                      name: "Web of Science",
                      desc: "Indexing",
                      icon: "🔬",
                      color: "bg-blue-50"
                    },
                    {
                      name: "Scopus",
                      desc: "Indexing",
                      icon: "🔍",
                      color: "bg-orange-50"
                    },
                    {
                      name: "Scite.ai",
                      desc: "Analytics",
                      icon: "📊",
                      color: "bg-green-50"
                    },
                    {
                      name: "SJR",
                      desc: "Metrics",
                      icon: "📈",
                      color: "bg-purple-50"
                    },
                    {
                      name: "ICPR",
                      desc: "Organization",
                      icon: "🏛️",
                      color: "bg-indigo-50"
                    },
                  ].map((partner, idx) => (
                    <div key={idx} className={`flex flex-col items-center text-center p-4 ${partner.color} rounded-lg hover:shadow-md transition-shadow border border-gray-200`}>
                      <div className="text-3xl mb-2">{partner.icon}</div>
                      <p className="text-base font-bold text-foreground">{partner.name}</p>
                      <p className="text-base text-muted-foreground mt-1">{partner.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Conference Proceedings */}
            <div className="bg-white rounded-lg p-4 border-l-4 border-primary">
              <p className="font-semibold text-foreground mb-2">Conference Proceedings</p>
              <p className="text-sm text-muted-foreground">
                Abstracts of all papers will be included in the official Conference Proceedings, with full papers published in the JICPR journal.
              </p>
            </div>
          </div>
        </div>

        {/* Conference Impact */}
        <div className="mt-8 bg-primary-50 border-l-4 border-primary rounded-lg p-8">
          <h3 className="text-xl font-bold text-primary mb-4">
            Why Attend This Conference?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="font-semibold text-foreground mb-2">
                Get Published
              </p>
              <p className="text-sm text-muted-foreground">
                Peer-reviewed papers published in JICPR (Springer), indexed in Web of Science & Scopus with global reach.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">
                Network Globally
              </p>
              <p className="text-sm text-muted-foreground">
                Connect with scholars, thinkers, and policy leaders worldwide.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">
                Reclaim Wisdom
              </p>
              <p className="text-base text-muted-foreground">
                Engage with civilizational philosophy addressing modern crises.
              </p>
            </div>
          </div>
        </div>

        {/* Objectives of the Conference */}
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Objectives of the Conference
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: 1,
                title: "Revisit Core Philosophy",
                description: "To revisit the core philosophy of Ekatma Manava Darshan and understand its relevance in the 21st century."
              },
              {
                number: 2,
                title: "Address Modern Challenges",
                description: "To explore how Hindu thought can address social, economic, political, and technological challenges faced by today's world."
              },
              {
                number: 3,
                title: "Present as Development Model",
                description: "To present Ekatma Manava Darshan as a development model compared to materialist and socialist frameworks like the SDGs."
              },
              {
                number: 4,
                title: "Encourage Academic Dialogue",
                description: "To encourage academic dialogue across disciplines and promote research rooted in Hindu civilizational wisdom."
              },
              {
                number: 5,
                title: "Inspire Integration of Dharma",
                description: "To inspire policymakers, scholars, and students to integrate Dharma-based thinking into governance, education, and societal development."
              },
            ].map((objective, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-indigo-100 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold text-lg">
                      {objective.number}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">
                      {objective.title}
                    </h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-16 border-t border-border text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Join the Conference</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of a global dialogue on civilizational philosophy and modern challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/call-for-papers"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
            >
              Submit Your Paper
            </a>
            <a
              href="/registration"
              className="px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Register as Participant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
