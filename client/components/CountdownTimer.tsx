import { useEffect, useState } from "react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isEnded: boolean;
}

export default function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isEnded: false,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      // Conference date: March 25, 2026
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
    <div className="w-full bg-gradient-to-r from-slate-900 to-primary-900 text-white py-6">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl font-bold">🎯 Conference Countdown</h3>
          {timeRemaining.isEnded ? (
            <p className="text-lg font-semibold">Conference is now happening!</p>
          ) : (
            <div className="grid grid-cols-4 gap-4 sm:gap-6">
              {/* Days */}
              <div className="flex flex-col items-center">
                <div className="bg-primary rounded-lg px-4 sm:px-6 py-3 sm:py-4 min-w-fit">
                  <div className="text-2xl sm:text-3xl font-bold">
                    {String(timeRemaining.days).padStart(2, "0")}
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-semibold mt-2">Days</p>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="bg-secondary rounded-lg px-4 sm:px-6 py-3 sm:py-4 min-w-fit">
                  <div className="text-2xl sm:text-3xl font-bold">
                    {String(timeRemaining.hours).padStart(2, "0")}
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-semibold mt-2">Hours</p>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="bg-accent rounded-lg px-4 sm:px-6 py-3 sm:py-4 min-w-fit">
                  <div className="text-2xl sm:text-3xl font-bold">
                    {String(timeRemaining.minutes).padStart(2, "0")}
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-semibold mt-2">Minutes</p>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <div className="bg-yellow-600 rounded-lg px-4 sm:px-6 py-3 sm:py-4 min-w-fit">
                  <div className="text-2xl sm:text-3xl font-bold">
                    {String(timeRemaining.seconds).padStart(2, "0")}
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-semibold mt-2">Seconds</p>
              </div>
            </div>
          )}
          <p className="text-sm sm:text-base text-gray-300 mt-2">
            until Ekatma Manav Darshan Conference • March 25-27, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
