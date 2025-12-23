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
        <div className="text-center">
          <p className="text-2xl font-bold text-secondary mb-1">🎉</p>
          <p className="text-sm font-semibold text-white">Conference Live!</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs font-bold text-gray-300">Days Until</p>
          <div className="bg-primary rounded-lg px-6 py-4 w-full">
            <div className="text-4xl sm:text-5xl font-bold text-white text-center">
              {String(timeRemaining.days).padStart(2, "0")}
            </div>
          </div>
          <p className="text-xs text-gray-300 text-center">
            Conference
          </p>
        </div>
      )}
    </div>
  );
}
