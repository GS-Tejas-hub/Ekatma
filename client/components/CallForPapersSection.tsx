import { Link } from "react-router-dom";

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
    { label: "Language", value: "English" },
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
                      className="flex items-start gap-2 text-sm text-black font-medium"
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
              Submit Your Paper via CMT
            </h3>
            <div className="space-y-4 mb-6">
              <p className="text-foreground text-sm leading-relaxed">
                Papers should be submitted through the Microsoft Conference Management Toolkit (CMT).
              </p>
              <div className="bg-primary-50 p-4 rounded-md border border-primary-200">
                <p className="font-semibold text-foreground text-sm mb-2">Before Submitting:</p>
                <p className="text-sm text-black mb-3">
                  You will need a CMT account to submit your paper. If you don't have one, create it here:
                </p>
                <a
                  href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 bg-white border border-primary text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors text-center text-sm mb-3"
                >
                  Create CMT Account
                </a>
              </div>
              <div className="bg-primary-50 p-4 rounded-md border border-primary-200">
                <p className="font-semibold text-foreground text-sm mb-2">Submission Instructions:</p>
                <p className="text-sm text-black mb-3">
                  For detailed instructions on how to submit your paper to CMT, please refer to:
                </p>
                <a
                  href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 bg-white border border-primary text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors text-center text-sm"
                >
                  Author Submission Guide
                </a>
              </div>
            </div>
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
