export default function ImportantDatesBanner() {
  const dates = [
    { label: "Call for Papers Opens", date: "Now" },
    { label: "Submission Deadline", date: "25 February 2026" },
    { label: "Conference Dates", date: "25-27 March 2026" },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 overflow-hidden border-b-2 border-primary-700">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .scroll-text {
          animation: scroll 40s linear infinite;
        }
        .scroll-text:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="flex gap-8 whitespace-nowrap scroll-text">
        {[...dates, ...dates, ...dates].map((item, idx) => (
          <span key={idx} className="text-sm font-semibold flex items-center gap-2 px-4">
            <span>📅</span>
            <span>{item.label}:</span>
            <span className="font-bold text-white">{item.date}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
