import { useEffect, useState } from "react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isEnded: boolean;
}

export default function TopRightCountdown() {
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
    <div className="fixed top-28 right-4 sm:right-6 lg:right-8 z-40 bg-black bg-opacity-40 backdrop-blur-sm rounded-lg p-3 border border-primary border-opacity-50 shadow-lg max-w-xs">
      {timeRemaining.isEnded ? (
        <p className="text-sm font-semibold text-secondary text-center">Conference Live! 🎉</p>
      ) : (
        <div>
          <div className="grid grid-cols-4 gap-1.5">
            {/* Days */}
            <div className="flex flex-col items-center">
              <div className="bg-primary rounded px-1.5 py-1">
                <div className="text-xs sm:text-sm font-bold text-white">
                  {String(timeRemaining.days).padStart(2, "0")}
                </div>
              </div>
              <p className="text-xs font-semibold text-white mt-0.5">Days</p>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="bg-secondary rounded px-1.5 py-1">
                <div className="text-xs sm:text-sm font-bold text-white">
                  {String(timeRemaining.hours).padStart(2, "0")}
                </div>
              </div>
              <p className="text-xs font-semibold text-white mt-0.5">Hrs</p>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="bg-accent rounded px-1.5 py-1">
                <div className="text-xs sm:text-sm font-bold text-white">
                  {String(timeRemaining.minutes).padStart(2, "0")}
                </div>
              </div>
              <p className="text-xs font-semibold text-white mt-0.5">Mins</p>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="bg-yellow-600 rounded px-1.5 py-1">
                <div className="text-xs sm:text-sm font-bold text-white">
                  {String(timeRemaining.seconds).padStart(2, "0")}
                </div>
              </div>
              <p className="text-xs font-semibold text-white mt-0.5">Secs</p>
            </div>
          </div>
          <p className="text-xs text-gray-300 text-center mt-2">
            until Conference
          </p>
        </div>
      )}
    </div>
  );
}
