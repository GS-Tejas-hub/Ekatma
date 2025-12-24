import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ImportantDatesBanner from "@/components/ImportantDatesBanner";
import Footer from "@/components/Footer";

export default function ConceptNote() {
  return (
    <div className="min-h-screen bg-white">
      <ImportantDatesBanner />
      <Header />
      <div className="pt-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Concept Note
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              Ekatma Manav Darshan – Bharat's Worldview
            </h2>
            <p className="text-lg text-muted-foreground">
              Commemorating 60 Years of Pandit Deendayal Upadhyaya's Historic Lectures on Ekatma Manav Darshan
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none text-base text-black leading-relaxed space-y-8">
            {/* Introduction */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Introduction: Revisiting a Civilizational Vision</h3>
              <p className="text-justify">
                Sixty years ago, when ideological polarities held the world captive, Pandit Deendayal Upadhyaya articulated a distinctly civilizational framework Ekatma Manav Darshan, the Darshan of the Integrated Universe. Delivered in 1965, these historic lectures were not an imitation of Western theories but a retrieval of Bharat's philosophical continuity. Ekatma Manav Darshan is neither a political ideology nor a sociological model but a Darshan, a metaphysical worldview rooted in Rta, the cosmic order. It rests upon the principle that the human being is Ekatma an indivisible unity of Sharira (body), Manas (mind), Buddhi (intellect), and Atma (soul) and that society and the cosmos must be organized so that this integral evolution can unfold harmoniously. This concept note situates Ekatma Manav Darshan within contemporary global crises, reaffirming its philosophical depth and universal relevance.
              </p>
            </section>

            {/* Virat, Chiti, and Rashtra */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                <span className="text-primary">Virat</span>, <span className="text-primary">Chiti</span>, and <span className="text-primary">Rashtra</span>: The Architecture of Civilizational Consciousness
              </h3>
              <p>
                The metaphysical foundation of Ekatma Manav Darshan arises from the Bharatiya understanding of Virat, the cosmic totality of existence. In this worldview, individuals, society, nature, and the cosmos are not isolated fragments but expressions of a single Virat Purusha. Accordingly, society is understood not as an aggregate of interests or an administrative construct, but as an organic unity animated by its inner consciousness: Chiti. When Chiti manifests through institutions, ethics, culture, and collective memory, it becomes Rashtra not merely a nation-state but a civilizational organism. Rashtra transcends geography and ideology; it is the living embodiment of Samskara, Samskruti, Parampara. The Western reduction of society to contractual relations and state mechanisms collapses before this deeper Bharatiya ontology, wherein community is nurtured by culture, meaning, and moral solidarity.
              </p>
            </section>

            {/* Dharma-Centric Social Order */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Dharma-Centric Social Order and Global Civilizational Harmony</h3>
              <p>
                In an age of unprecedented loneliness, identity fragmentation, and erosion of trust, Ekatma Manav Darshan offers a vision for restoring social harmony through Dharma. Dharma here is not ritualism nor religious dogma; it is the ethical principle that sustains equilibrium in individual, social, ecological, and cosmic dimensions. Society in this worldview is held not by the assertion of rights but by Kartavya the mutual duties that arise from a recognition of shared existence. When relationships are governed by Satya (truth), Ahimsa (non-violence), Seva (service), and Dama (self-restraint), social conflict dissolves and community flourish. This Dharma-based relational ethic challenges destructive polarizations and offers a universally applicable model of civilizational harmony, capable of healing deeply fragmented human societies.
              </p>
            </section>

            {/* Economic Thought */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Economic Thought: Dharma Regulating Artha for Sustainable Prosperity</h3>
              <p>
                Economic models of capitalism and socialism alike reduce human beings to economic abstractions. Modern development is primarily defined by production and consumption, and the planet is treated as a resource warehouse. Ekatma Manav Darshan locates Artha (wealth) within the ethical horizon of Dharma, ensuring that wealth creation does not generate injustice, ecological degradation, or psychological emptiness. Here, Bhūmi (Earth) is not an exploitable object but a living mother, and economic prosperity must be achieved in reverence to her. Bharatiya civilizational experience from trust-based commerce offers an autonomous, ethical, and ecologically aligned economic imagination highly relevant to global sustainability challenges today.
              </p>
            </section>

            {/* Purushartha */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Purushartha: The Fourfold Anthropology of Integrated Human Life</h3>
              <p>
                Central to the philosophical anthropology of Ekatma Manav Darshan is the Purushartha framework Dharma, Artha, Kama, and Moksha which provides a sophisticated architecture of human aspiration. Kama, the pursuit of joy, beauty, and sensory fulfilment, is recognized as legitimate yet guided so as not to degenerate into indulgence. Artha, the pursuit of material security and productivity, is honoured but morally regulated by Dharma so that wealth contributes to collective well-being rather than exploitation. Dharma gives ethical direction to Artha and Kama, ensuring psychological balance and social justice. Moksha, the liberation of consciousness, is not abandonment of society but the highest flowering of human potential made possible only when the lower aspirations are harmonized. The Purushartha synthesis reveals that spiritual fulfilment and worldly engagement are not opposites but complementary trajectories within a unified human evolution. No modern-day civilizational philosophy has integrated material, psychological, ethical, and spiritual dimensions with such coherence.
              </p>
            </section>

            {/* Governance */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Dharma Rajya and Swaraj: Restoring Moral Governance</h3>
              <p>
                The crisis of modern politics is not merely institutional but moral. Democracies everywhere face declining trust, populism, polarization, and transactional leadership. Ekatma Manav Darshan proposes a governance model rooted in Swaraj self-rule arising from social maturity and Dharma Rajya, where governance is not power management but moral responsibility. The State is not sovereign over society; it is its Yantra, an instrument serving cultural and ethical aims. Leadership arises not from muscular competition or ideological manipulation but from Guna - character, capability, and selflessness. This political imagination provides a powerful alternative to both authoritarian state centrism and vacuous liberal proceduralism.
              </p>
            </section>

            {/* Technology and Consciousness */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Technology, Consciousness, and Ethical Modernity</h3>
              <p>
                In the technological civilization of the 21st century, humanity wields enormous power but lacks ethical orientation. Artificial intelligence, biotechnology, automation, and digital dominance have created existential dilemmas regarding identity, freedom, and dignity. Ekatma Manav Darshan insists that Buddhi must govern Yantra technology must remain subordinate to ethical intelligence. The principle of Lokasangraha, welfare of all beings, provides a compass for shaping technological ethics. This worldview offers a civilizational lens to reframe debates on AI governance, mental well-being, digital sovereignty, and socio-economic transition.
              </p>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Education and the Formation of Holistic Human Being</h3>
              <p>
                Modern education produces technically adept individuals, yet it rarely cultivates the Holistic Human Being (Sampūrṇa Purusha) capable of intellectual clarity, emotional maturity, ethical strength, social sensitivity, and spiritual awareness. Bharatiya educational philosophy recognizes that true development unfolds through all five koshas from Annamaya (physical embodiment) and Prāṇamaya (vital energy) to Manomaya (mental-emotional depth), Vijñānamaya (discriminative intelligence), and culminating in Anandamaya (bliss-consciousness). Hence, education cannot be reduced to cognitive training or vocational competence; it must become a transformative journey integrating Jnana (wisdom), Vijnana (applied knowledge), and Samskara (inner refinement). Pedagogy evolves through Śravaṇa (attentive learning), Manana (reflective analysis), and Nididhyāsana (experiential assimilation), ensuring that knowledge is lived, not merely memorized. Through the Guru–Shishya parampara, yogic disciplines, contemplative inquiry, narrative traditions, and experiential learning, students are shaped into individuals aware of their duties, responsibilities, and cosmic interconnectedness. In an era marked by ecological fragility, social disintegration, and psychological vulnerability, this holistic Bharatiya educational vision offers a deeply relevant model for global rethinking of education.
              </p>
            </section>

            {/* Global Context */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Global Context: Beyond SDGs and Western Universalism</h3>
              <p>
                The Sustainable Development Goals (SDGs) are projected as globally valid frameworks, but a deeper philosophical reading reveals their grounding in homogenized Western assumptions centralization, redistribution, materialist equality, and instrumental rationality. They overlook civilizational diversity and spiritual dimensions of life. Ekatma Manav Darshan offers a civilizational grounded alternative. It does not reject global cooperation but insists that the future of humanity must rest on civilizational plurality, cultural specificity, ethical rootedness, and ecological humility. Harmony, not hegemony, must guide global development.
              </p>
            </section>

            {/* Conclusion */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-4">Conclusion: A Civilizational Call for the 21st Century</h3>
              <p>
                This international conference seeks not merely to commemorate Deendayal ji but to renew the philosophical inquiry that he ignited. It invites scholars, thinkers, policy leaders, and cultural custodians to reclaim Bharat's Darshan as a global epistemology demanding serious academic engagement. The conference is a civilizational endeavour to situate Ekatma Manav Darshan not as cultural nostalgia but as a philosophical framework capable of guiding humanity through psychological disorder, political anxiety, economic alienation, ecological collapse, and spiritual amnesia.
              </p>
              <p>
                In essence, the conference calls humanity to recognize itself in its integral fullness to see the human not as a mechanized producer-consumer but as an expression of Virat Purusha, to recognize society not as contractual aggregation but as Chiti-driven Rashtra, to envision governance not as domination but as Dharma Rajya, to practice economics not as extraction but as Artha refined by Dharma, to harness technology not as enslavement but as Yantra governed by Buddhi, and to shape education not as skill reproduction but as the formation of Poorn Manav. This is Bharat's worldview, universal in its depth, civilizational in its maturity, and essential for shaping a harmonious global future.
              </p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-16 border-t border-border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Contribute?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Submit your research exploring these concepts and contribute to the global discourse on Ekatma Manav Darshan.
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
      <Footer />
    </div>
  );
}
