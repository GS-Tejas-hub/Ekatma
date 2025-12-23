export default function HeroSection() {
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-8 pb-8">
            <div className="max-h-40 max-w-40 h-40 flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F6a3f67e389ad4b11905ee7b9c7d9f83b?format=webp&width=800"
                alt="Karnataka State Open University"
                className="h-auto w-auto max-h-40 max-w-40 object-contain"
              />
            </div>
            <div className="max-h-40 max-w-56 h-40 flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Feb4ac6a98d884bfa89b0c62dbd54a0c0?format=webp&width=800"
                alt="Prain Prava"
                className="h-auto w-auto max-h-40 max-w-56 object-contain"
              />
            </div>
            <div className="max-h-40 max-w-40 h-40 flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Faf66188fb7e04bfb803f4dd8a156b6ad?format=webp&width=800"
                alt="Dr. Syama Prasad Mookerjee Research Foundation"
                className="h-auto w-auto max-h-40 max-w-40 object-contain"
              />
            </div>
          </div>

          {/* Conference Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto pt-4">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 border border-white border-opacity-20">
              <p className="text-gray-300 text-sm font-medium mb-2">Dates</p>
              <p className="text-white font-bold text-lg">
                March 25-27, 2025
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 border border-white border-opacity-20">
              <p className="text-gray-300 text-sm font-medium mb-2">Location</p>
              <p className="text-white font-bold text-lg">Mysore, India</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 border border-white border-opacity-20">
              <p className="text-gray-300 text-sm font-medium mb-2">Theme</p>
              <p className="text-white font-bold text-lg">Philosophy</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#registration"
              className="px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-600 transition-colors shadow-lg"
            >
              Register Now
            </a>
            <a
              href="#papers"
              className="px-8 py-3 bg-white bg-opacity-20 text-white font-semibold rounded-lg border border-white hover:bg-opacity-30 transition-colors backdrop-blur-sm"
            >
              Submit Paper
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
