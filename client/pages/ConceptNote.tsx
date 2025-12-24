import { Link } from "react-router-dom";

export default function ConceptNote() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Concept Note
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding the Intellectual Foundation of Ekatma Manav Darshan
          </p>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto mb-16">
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Conference Theme
              </h2>
              <p className="text-base text-black leading-relaxed">
                The Ekatma Manav Darshan Conference explores the civilizational philosophy articulated by Pandit Deendayal Upadhyaya, examining its relevance to contemporary global challenges and offering insights into sustainable development, ethical governance, and holistic human well-being.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Core Concepts
              </h2>
              <p className="text-base text-black leading-relaxed">
                Ekatma Manav Darshan presents an integrated worldview rooted in the cosmic principle of Rta (cosmic order), viewing the human being as Ekatma—an indivisible unity of body, mind, intellect, and soul. This framework addresses social fragmentation, ethical crises, and the need for a development model that balances material progress with spiritual fulfillment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Research Focus Areas
              </h2>
              <ul className="space-y-3 text-base text-black">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Philosophical foundations and metaphysical underpinnings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Applications to contemporary governance and economics</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Education and holistic human development</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Comparative civilizational analysis</span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-16 border-t border-border text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Contribute?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Submit your research exploring these concepts and contribute to the global discourse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/call-for-papers"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
            >
              Submit Your Paper
            </Link>
            <Link
              to="/registration"
              className="px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Register as Participant
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
