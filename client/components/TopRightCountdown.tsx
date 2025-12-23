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
    <div className="fixed top-24 left-4 sm:left-6 lg:left-8 z-40 bg-black bg-opacity-40 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-primary border-opacity-50 shadow-lg w-64 sm:w-72">
      {timeRemaining.isEnded ? (
        <p className="text-base font-semibold text-secondary text-center">Conference Live! 🎉</p>
      ) : (
        <div>
          <h4 className="text-sm font-bold text-white mb-3 text-center">Conference Countdown</h4>
          <div className="grid grid-cols-4 gap-2">
            {/* Days */}
            <div className="flex flex-col items-center">
              <div className="bg-primary rounded px-2 py-2 w-full">
                <div className="text-sm sm:text-base font-bold text-white text-center">
                  {String(timeRemaining.days).padStart(2, "0")}
                </div>
              </div>
              <p className="text-xs font-semibold text-white mt-1">Days</p>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="bg-secondary rounded px-2 py-2 w-full">
                <div className="text-sm sm:text-base font-bold text-white text-center">
                  {String(timeRemaining.hours).padStart(2, "0")}
                </div>
              </div>
              <p className="text-xs font-semibold text-white mt-1">Hours</p>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="bg-accent rounded px-2 py-2 w-full">
                <div className="text-sm sm:text-base font-bold text-white text-center">
                  {String(timeRemaining.minutes).padStart(2, "0")}
                </div>
              </div>
              <p className="text-xs font-semibold text-white mt-1">Minutes</p>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="bg-yellow-600 rounded px-2 py-2 w-full">
                <div className="text-sm sm:text-base font-bold text-white text-center">
                  {String(timeRemaining.seconds).padStart(2, "0")}
                </div>
              </div>
              <p className="text-xs font-semibold text-white mt-1">Seconds</p>
            </div>
          </div>
          <p className="text-xs text-gray-300 text-center mt-3">
            until March 25-27, 2026
          </p>
        </div>
      )}
    </div>
  );
}
