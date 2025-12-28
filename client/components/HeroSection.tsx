import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

export default function HeroSection() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isEnded: false,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const conferenceDate = new Date(2026, 2, 25).getTime();
      const now = new Date().getTime();
      const difference = conferenceDate - now;

      if (difference <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isEnded: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
        isEnded: false,
      });
    };

    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-primary-700 to-slate-900 py-8 md:py-16">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4">
          {/* International Academic Conference - At the very top */}
          <div className="inline-block">
            <span className="inline-block px-6 py-2 bg-secondary bg-opacity-20 border border-secondary rounded-full text-white font-bold text-base">
              International Academic Conference
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ekatma Manav Darshan
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-secondary">
              Bharat's Worldview
            </p>
            <p className="text-lg sm:text-xl font-semibold text-gray-100">
              25–27 March 2026 • Mysore, Karnataka, India
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Commemorating 60 Years of Pandit Deendayal Upadhyaya's historic
            lectures on Ekatma Manav Darshan
          </p>

          {/* Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-4 pb-4 flex-wrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F6a3f67e389ad4b11905ee7b9c7d9f83b?format=webp&width=800"
              alt="Karnataka State Open University"
              className="h-40 w-auto object-contain"
            />
            <div className="bg-white rounded-lg px-4 py-2 flex items-center justify-center h-40">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F8507eab6c65644c2a604cd0b74a430f4?format=webp&width=800"
                alt="Prajna Pravah"
                className="w-auto object-contain"
              />
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fb6882a0e120443568afd5a37e5ba2d5b?format=webp&width=800"
              alt="Dr. Syama Prasad Mookerjee Research Foundation"
              className="h-40 w-auto object-contain"
            />
          </div>

          {/* About Deendayal & Image Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-4 pb-4 max-w-6xl mx-auto">
            {/* Left: Text Content */}
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Pandit Deendayal Upadhyaya
              </h2>
              <p className="text-gray-100 leading-relaxed text-base lg:text-lg">
                Deendayal Upadhyaya was a prominent Indian thinker, philosopher,
                and political leader known for shaping the ideological
                foundation of modern Indian politics through his concept of
                Ekatma Manav Darshan. He emphasized a development model rooted in
                Bharatiya culture, ethics, and social harmony, advocating for
                self-reliance, self-rule, and uplifting the last person
                in society (Antyodaya).
              </p>
              <p className="text-gray-100 leading-relaxed text-base lg:text-lg">
                A guiding force behind the Bharatiya Jana Sangh, Upadhyaya
                envisioned a nation that balances material progress with moral
                values, diversity with unity, and tradition with modernity. His
                ideas continue to inspire socio-political thought in India,
                promoting a humane and culturally grounded approach to
                nation-building.
              </p>
            </div>

            {/* Right: Image Slider */}
            <div>
              <ImageSlider />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/registration"
              onClick={() => window.scrollTo(0, 0)}
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
            >
              Register Now
            </Link>
            <Link
              to="/call-for-papers"
              onClick={() => window.scrollTo(0, 0)}
              className="px-8 py-3 bg-white bg-opacity-20 text-white font-semibold rounded-lg border border-white hover:bg-opacity-30 transition-colors backdrop-blur-sm"
            >
              Call for Papers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
