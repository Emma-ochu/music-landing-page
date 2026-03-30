import React, { useEffect, useState } from "react";

function Countdown({ releaseDate }) {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = releaseDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTime({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [releaseDate]);

  return (
    <div className="countdown-container">
      <div className="count-box">
        <span>{time.days}</span>
        <small>DAYS</small>
      </div>
      <div className="count-box">
        <span>{time.hours}</span>
        <small>HOURS</small>
      </div>
      <div className="count-box">
        <span>{time.minutes}</span>
        <small>MIN</small>
      </div>
      <div className="count-box">
        <span>{time.seconds}</span>
        <small>SEC</small>
      </div>
    </div>
  );
}

export default Countdown;