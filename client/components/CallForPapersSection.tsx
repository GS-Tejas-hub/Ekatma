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

        {/* Author Guidelines and Submission Guidelines */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Guidelines for Authors
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Author Guidelines */}
            <div className="bg-white border border-primary-200 rounded-lg p-8">
              <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="text-2xl">✍️</span>
                Author Guidelines
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-semibold text-foreground text-base mb-1">Author Eligibility</p>
                  <p className="text-base text-black">
                    Open to scholars, researchers, academicians, and intellectuals with expertise or keen interest in Indic philosophy, cultural studies, and allied disciplines.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-semibold text-foreground text-base mb-1">Registration & Fees</p>
                  <p className="text-base text-black">
                    All authors presenting their work are required to register for the conference. Registration fees cover conference materials, meals, and participation in all sessions.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-semibold text-foreground text-base mb-1">Language</p>
                  <p className="text-base text-black">
                    All submissions must be in English with professional academic language and clarity.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-semibold text-foreground text-base mb-1">Plagiarism & Originality</p>
                  <p className="text-base text-black">
                    Papers must be original, unpublished work. Plagiarism detection will be performed on all submissions. Papers found to be plagiarized will be rejected.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-semibold text-foreground text-base mb-1">Presentation Expectations</p>
                  <p className="text-base text-black">
                    Authors of accepted papers are expected to attend the conference and present their work. Presentation slots are typically 20–25 minutes followed by Q&A.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-semibold text-foreground text-base mb-1">Publication Rights</p>
                  <p className="text-base text-black">
                    By submitting, authors agree that selected papers may be published in journal or conference proceedings. Copyright terms will be specified by the publisher.
                  </p>
                </div>
              </div>
            </div>

            {/* Submission Guidelines */}
            <div className="bg-white border border-secondary-200 rounded-lg p-8">
              <h4 className="text-xl font-bold text-secondary mb-6 flex items-center gap-3">
                <span className="text-2xl">📝</span>
                Paper Submission Guidelines
              </h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-foreground text-base">Original & Unpublished Work</p>
                    <p className="text-base text-black">
                      Submit original and unpublished papers aligned with the conference theme. No simultaneous submissions to other conferences or journals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-foreground text-base">Paper Length</p>
                    <p className="text-base text-black">
                      5,000–7,000 words, including references and appendices.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-foreground text-base">Abstract & Keywords</p>
                    <p className="text-base text-black">
                      Include a structured abstract (200–250 words) and 5–6 relevant keywords to aid in indexing and discovery.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    4
                  </span>
                  <div>
                    <p className="font-semibold text-foreground text-base">Citation Style</p>
                    <p className="text-base text-black">
                      Follow APA (American Psychological Association) citation style for all references and in-text citations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    5
                  </span>
                  <div>
                    <p className="font-semibold text-foreground text-base">File Format</p>
                    <p className="text-base text-black">
                      Submit in MS Word format (.doc/.docx). Font: Times New Roman or Arial, 12 pt, single-spaced with 1.5-inch margins.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    6
                  </span>
                  <div>
                    <p className="font-semibold text-foreground text-base">Peer Review</p>
                    <p className="text-base text-black">
                      All papers will undergo double-blind peer review by two independent reviewers to ensure quality and academic rigor.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    7
                  </span>
                  <div>
                    <p className="font-semibold text-foreground text-base">Author Declaration</p>
                    <p className="text-base text-black">
                      Include a brief author bio (50–100 words), institutional affiliation, and contact information on a separate cover page.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    8
                  </span>
                  <div>
                    <p className="font-semibold text-foreground text-base">Publication & Presentation</p>
                    <p className="text-base text-black">
                      Selected papers will be considered for publication in peer-reviewed journals and presentation at the conference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submission Guidelines */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            {/* Where to Submit */}
            <div className="bg-white border border-primary-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-6">
                Where to Submit
              </h3>
              <div className="bg-blue-50 p-6 rounded-md border border-blue-300">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔗</span>
                  <div>
                    <p className="font-semibold text-foreground text-base mb-2">
                      CMT Submission Link Coming Shortly
                    </p>
                    <p className="text-base text-black">
                      The CMT submission portal for the Ekatma Manav Darshan conference will be available soon. Please check back here or contact us for the direct submission link.
                    </p>
                    <p className="text-base text-muted-foreground mt-3">
                      <strong>Submission Deadline:</strong> 25 February 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Submit */}
            <div className="bg-white border border-primary-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-6">
                How to Submit
              </h3>
              <div className="space-y-6">
                <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
                  <p className="text-base text-black leading-relaxed">
                    <strong className="text-foreground">Before you submit your paper:</strong> You will need to have a CMT (Conference Management Toolkit) account. If you don't already have one, create an account using the link below.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground text-sm mb-3">Step 1: Create or Access Your CMT Account</p>
                  <a
                    href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-center text-sm"
                  >
                    Create CMT Account →
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-foreground text-sm mb-3">Step 2: Submit Your Paper</p>
                  <p className="text-base text-black mb-3">
                    Once you have your CMT account, follow the submission guidelines:
                  </p>
                  <a
                    href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors text-center text-sm"
                  >
                    Author Submission Guide →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6">
              <h4 className="font-bold text-secondary mb-3 flex items-center gap-2">
                <span className="text-xl">📜</span> Publication Opportunity
              </h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                Selected papers will be published in the Journal of Indian
                Council of Philosophical Research (JICPR), indexed in Web of
                Science (ESCI) and Scopus.
              </p>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
              <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                <span className="text-xl">🎓</span> Who Should Apply?
              </h4>
              <p className="text-base text-muted-foreground leading-relaxed">
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
              <p className="text-base font-semibold text-foreground mt-2">
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
                <p className="text-base text-muted-foreground">Now Open</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 w-4 h-4 bg-secondary rounded-full border-4 border-white -ml-2 -mt-2" />
              <div className="ml-6">
                <p className="font-semibold text-foreground">
                  Submission Deadline
                </p>
                <p className="text-base text-muted-foreground">
                  25 February 2026
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 w-4 h-4 bg-accent rounded-full border-4 border-white -ml-2 -mt-2" />
              <div className="ml-6">
                <p className="font-semibold text-foreground">Conference</p>
                <p className="text-base text-muted-foreground">
                  25-27 March 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CMT Acknowledgment */}
        <div className="mt-16 p-6 bg-gray-50 border border-border rounded-lg text-center">
          <p className="text-sm text-black">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-16 border-t border-border text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Submit?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us at the Ekatma Manav Darshan conference and contribute to the discourse on Bharat's worldview.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#registration"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
            >
              Register Now
            </a>
            <a
              href="/important-dates"
              className="px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              View Important Dates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
