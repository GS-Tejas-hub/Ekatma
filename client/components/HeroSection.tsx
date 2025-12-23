import { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isEnded: boolean;
}

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
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-primary-700 to-slate-900 py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Subtitle */}
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-secondary bg-opacity-20 border border-secondary rounded-full text-white font-semibold text-sm">
              International Academic Conference
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ekatma Manav Darshan
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-secondary">
              Bharat's Worldview
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Commemorating 60 Years of Pandit Deendayal Upadhyaya's Historic
            Lectures on Integral Humanism
          </p>

          {/* Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-8 pb-8 flex-wrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F6a3f67e389ad4b11905ee7b9c7d9f83b?format=webp&width=800"
              alt="Karnataka State Open University"
              className="h-40 w-auto object-contain"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F8507eab6c65644c2a604cd0b74a430f4?format=webp&width=800"
              alt="Prajna Pravah"
              className="h-40 w-auto object-contain"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F3e8fc7d1d60b45749080e75fe1250b65?format=webp&width=800"
              alt="Dr. Syama Prasad Mookerjee Research Foundation"
              className="h-40 w-auto object-contain"
            />
          </div>

          {/* About Deendayal & Image Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-8 pb-8 max-w-6xl mx-auto">
            {/* Left: Text Content */}
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Pandit Deendayal Upadhyaya
              </h2>
              <p className="text-gray-100 leading-relaxed text-base lg:text-lg">
                Deendayal Upadhyaya was a prominent Indian thinker, philosopher, and political leader known for shaping the ideological foundation of modern Indian politics through his concept of Integral Humanism. He emphasized a development model rooted in Indian culture, ethics, and social harmony, advocating for self-reliance, decentralization, and uplifting the last person in society (Antyodaya).
              </p>
              <p className="text-gray-100 leading-relaxed text-base lg:text-lg">
                A guiding force behind the Bharatiya Jana Sangh, Upadhyaya envisioned a nation that balances material progress with moral values, unity with diversity, and tradition with modernity. His ideas continue to inspire socio-political thought in India, promoting a humane and culturally grounded approach to nation-building.
              </p>
            </div>

            {/* Right: Image Slider */}
            <div>
              <ImageSlider />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#registration"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
            >
              Register Now
            </a>
            <a
              href="#papers"
              className="px-8 py-3 bg-white bg-opacity-20 text-white font-semibold rounded-lg border border-white hover:bg-opacity-30 transition-colors backdrop-blur-sm"
            >
              Call for Papers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
