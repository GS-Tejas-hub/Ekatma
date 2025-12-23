import { useState, useEffect } from "react";

const images = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fea5f4697130f451281b34d8a5eaa4969?format=webp&width=800",
    alt: "Deendayal Upadhyaya 2015 stamp",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fb1e7622023cb4547bc5517005bc9c444?format=webp&width=800",
    alt: "Deendayal Upadhyaya 2016 stamp",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc0a92ddcab7e4b2898df3f8667fc758d?format=webp&width=800",
    alt: "Deendayal Upadhyaya 2018 stamp",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F3e2506006fa941c49d548fe8f31aaee6?format=webp&width=800",
    alt: "Pandit Deendayal Upadhyaya bust",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4b24d6ad7c4846b996e583fdf1c83fef?format=webp&width=800",
    alt: "PM Modi offering Pushpanjali on Deendayal statue",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto pt-8 pb-8">
      <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-square md:aspect-video">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-6"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
