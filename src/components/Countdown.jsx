import React, { useEffect, useState } from "react";

function Countdown() {
  const targetDate = new Date("2025-10-01T10:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <div>
      <p>
        {timeLeft.days} Hari {timeLeft.hours} Jam {timeLeft.minutes} Menit {timeLeft.seconds} Detik
      </p>
    </div>
  );
}

export default Countdown;
