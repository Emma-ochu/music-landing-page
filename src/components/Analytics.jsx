import React, { useEffect, useState } from "react";

function Analytics() {
  const [data, setData] = useState({
    spotify: 0,
    apple: 0,
    youtube: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const saved = JSON.parse(localStorage.getItem("clicks"));
    if (saved) setData(saved);
   }, 1000);
   return () => clearInterval(interval);
   }, []);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>📊 Engagement</h2>
      <p>Spotify Clicks: {data.spotify}</p>
      <p>Apple Music Clicks: {data.apple}</p>
      <p>YouTube Clicks: {data.youtube}</p>
    </div>
  );

  <button 
  onClick={() =>{
    localStorage.removeItem("clicks");
    window.location.reload();
  }}
  >
    Reset Data
  </button>
}

export default Analytics;