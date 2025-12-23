export default function CallForPapersSection() {
  const topics = [
    {
      category: "Philosophical Foundations",
      items: [
        "Ekatmabhava as Ontology",
        "Holistic Anthropology",
        "Dharma as Ethical Order",
        "Comparative Civilizational Analysis",
      ],
    },
    {
      category: "Purushartha Framework",
      items: [
        "Integration of Dharma–Artha–Kama–Moksha",
        "Ethical Economics",
        "Kama Beyond Consumerism",
        "Moksha as Human Excellence",
      ],
    },
    {
      category: "Governance & Technology",
      items: [
        "Dharma Rajya",
        "Swaraj & Decentralized Governance",
        "AI and Consciousness",
        "Dharmic Tech Ethics",
      ],
    },
    {
      category: "Education & Culture",
      items: [
        "Holistic Human Development",
        "Guru–Shishya Dynamics",
        "Civilizational Pedagogy",
        "Indic Knowledge Systems",
      ],
    },
  ];

  const guidelines = [
    {
      label: "Paper Length",
      value: "5,000–7,000 words (including references)",
    },
    { label: "Abstract", value: "200–250 words with 5–6 keywords" },
    { label: "Format", value: "APA citation style, MS Word (.doc/.docx)" },
    { label: "Submission", value: "thebharatsworldview@gmail.com" },
    { label: "Deadline", value: "25 February 2026" },
  ];

  return (
    <section id="papers" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Call for Papers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Scholars, researchers, and thinkers are invited to submit original
            papers exploring Ekatma Manav Darshan and its relevance to
            contemporary global challenges.
          </p>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Research Areas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-primary mb-4">{topic.category}</h4>
                <ul className="space-y-2">
                  {topic.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-secondary font-bold flex-shrink-0 mt-1">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Guidelines */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white border border-primary-200 rounded-lg p-8">
            <h3 className="text-xl font-bold text-primary mb-6">
              Submission Guidelines
            </h3>
            <ul className="space-y-4">
              {guidelines.map((guide, idx) => (
                <li key={idx}>
                  <p className="font-semibold text-foreground text-sm">
                    {guide.label}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {guide.value}
                  </p>
                </li>
              ))}
            </ul>
            <button className="w-full mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
              Submit Your Paper
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6">
              <h4 className="font-bold text-secondary mb-3 flex items-center gap-2">
                <span className="text-xl">📜</span> Publication Opportunity
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Selected papers will be published in the Journal of Indian
                Council of Philosophical Research (JICPR), indexed in Web of
                Science (ESCI) and Scopus.
              </p>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
              <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                <span className="text-xl">🎓</span> Who Should Apply?
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Academicians, philosophers, economists, technologists,
                educationists, policy experts, and researchers in Indic
                knowledge systems. Interdisciplinary submissions encouraged.
              </p>
            </div>

            <div className="bg-accent-50 border border-accent-200 rounded-lg p-6">
              <h4 className="font-bold text-accent mb-3 flex items-center gap-2">
                <span className="text-xl">💬</span> Questions?
              </h4>
              <p className="text-sm text-muted-foreground">
                Contact: Dr. Niranjan B Poojar
              </p>
              <p className="text-sm font-semibold text-foreground mt-2">
                +91 9164582650
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-primary mb-6">Timeline</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-4 border-white -ml-2 -mt-2" />
              <div className="ml-6">
                <p className="font-semibold text-foreground">
                  Call for Papers
                </p>
                <p className="text-sm text-muted-foreground">Now Open</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 w-4 h-4 bg-secondary rounded-full border-4 border-white -ml-2 -mt-2" />
              <div className="ml-6">
                <p className="font-semibold text-foreground">
                  Submission Deadline
                </p>
                <p className="text-sm text-muted-foreground">
                  25 February 2026
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 w-4 h-4 bg-accent rounded-full border-4 border-white -ml-2 -mt-2" />
              <div className="ml-6">
                <p className="font-semibold text-foreground">Conference</p>
                <p className="text-sm text-muted-foreground">
                  25-27 March 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
