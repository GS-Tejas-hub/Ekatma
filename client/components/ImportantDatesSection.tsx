export default function ImportantDatesSection() {
  const dates = [
    {
      milestone: "Call for Papers Opens",
      date: "Now",
      icon: "📢",
    },
    {
      milestone: "Submission Deadline",
      date: "25 February 2026",
      icon: "📝",
    },
    {
      milestone: "Author Notification",
      date: "31 March 2026",
      icon: "✉️",
    },
    {
      milestone: "Camera-Ready Deadline",
      date: "20 April 2026",
      icon: "📄",
    },
    {
      milestone: "Conference Dates",
      date: "25-27 March 2025",
      icon: "📅",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Important Dates
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Key deadlines and milestones for the conference
          </p>
        </div>

        {/* Dates Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {dates.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-6 items-start p-6 bg-gray-50 rounded-lg border border-border hover:border-primary hover:shadow-md transition-all"
              >
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-foreground">
                    {item.milestone}
                  </h3>
                  <p className="text-primary font-semibold text-base mt-1">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Notice */}
          <div className="mt-12 p-6 bg-primary-50 border border-primary-200 rounded-lg">
            <p className="text-sm text-black text-center">
              <strong>⚠️ Important:</strong> All dates are subject to change. Please check this website regularly for any updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
