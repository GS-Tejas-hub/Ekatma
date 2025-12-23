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
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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
              <p className="text-sm text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Conference Impact */}
        <div className="mt-16 bg-primary-50 border-l-4 border-primary rounded-lg p-8">
          <h3 className="text-xl font-bold text-primary mb-4">
            Why Attend This Conference?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="font-semibold text-foreground mb-2">
                Get Published
              </p>
              <p className="text-sm text-muted-foreground">
                Peer-reviewed papers published in indexed journals with global
                reach.
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
              <p className="text-sm text-muted-foreground">
                Engage with civilizational philosophy addressing modern crises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
