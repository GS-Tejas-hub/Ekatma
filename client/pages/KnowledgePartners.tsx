import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import Footer from "@/components/Footer";

export default function KnowledgePartners() {
  const partners = [
    {
      name: "Springer",
      category: "Publishing Partner",
      description: "Global leader in academic publishing, bringing conference proceedings and selected papers to international readership."
    },
    {
      name: "Indian Council of Philosophical Research (ICPR)",
      category: "Research Organization",
      description: "Dedicated to advancing philosophical research and scholarship in India."
    },
    {
      name: "Prajna Pravah",
      category: "Knowledge Organization",
      description: "Building civilizational narratives and fostering intellectual discourse on Indic thought."
    },
    {
      name: "Dr. Syama Prasad Mookerjee Research Foundation",
      category: "Research Foundation",
      description: "Committed to research and scholarship in Indian civilization and philosophical traditions."
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ImportantDatesBanner />
      <Header />
      <div className="pt-8">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Knowledge Partners
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Collaborative Network for Academic Excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm font-semibold text-secondary mb-3">
                  {partner.category}
                </p>
                <p className="text-base text-black leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          <section className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8 border border-primary-200 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              About Our Partnership
            </h2>
            <p className="text-base text-black leading-relaxed mb-4">
              Our knowledge partners bring together expertise in academic publishing, philosophical research, civilizational studies, and institutional excellence. Together, we create a comprehensive ecosystem that supports rigorous scholarship and global dissemination of research on Ekatma Manav Darshan and related philosophical traditions.
            </p>
            <p className="text-base text-black leading-relaxed">
              These partnerships ensure that the conference maintains the highest standards of academic integrity, intellectual rigor, and international visibility.
            </p>
          </section>

          {/* CTA Section */}
          <div className="mt-16 pt-16 border-t border-border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Contribute to the Discourse</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Submit your research and be part of this international academic network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/call-for-papers"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
              >
                Call for Papers
              </Link>
              <Link
                to="/registration"
                className="px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
