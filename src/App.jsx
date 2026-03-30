// src/App.js
import { useState, useEffect } from "react";
import "./App.css";
import coverArt from "./assets/Cover.png"
import teaserVideo from "./assets/teaser.mp4";
import Countdown from "./components/Countdown";
import PreSaveButtons from "./components/PreSaveButtons";
import NewsletterForm from "./components/NewsletterForm";
import Analytics from "./components/Analytics";

function App() {
  const releaseDate = new Date("2026-04-03T00:00:00"); // update release date
  const [isReleased, setIsReleased] = useState(false);
  // relase logic
  // check relase status every minute
  useEffect(() => {
    const checkRelease = () => {
        const now = new Date();
        setIsReleased(now >= releaseDate);
      };  
      checkRelease();
      const timer = setInterval(checkRelease, 1000);
      return () => clearInterval(timer);
     }, []); // check every minute
  const spotifyLink = "https://open.spotify.com/artist/01I7dpIQNEFDyvyOYBvs4E?si=_tomXC0vRymC-w1TnrKNoQ"; // update
  const appleLink = "https://music.apple.com/us/artist/omega-b/921865811"; // update
  const youtubeLink = "https://www.youtube.com/@omegab001";

  
  // Admin anlytics 
  const isAdmin = window.location.search.includes("admin=true");
  // share button 
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };


  return (
    <div className="landing-page">
      {/* Logo */}
      {/* <img src={logo} alt="Artist Logo" className="logo" /> */}
      {/* Cover Art */}
      <img src={coverArt} alt="Cover Art" className="cover-art" />
      {/* Title */}
      <h1 className="title">🔥 New Song Release: "Solo (Ambition) (Remix)"</h1>
      {/* Artist Name */}
      <h2 className="artist-name">OMEGA B ft ARES WB </h2>

      <p className="tagline">
         Feel the vibe. Experience the sound Out soon.
      </p>
      {/* countdown/Out Now */}
      <Countdown releaseDate={releaseDate} />
      {/* burrons */}
      <PreSaveButtons 
      spotifyLink={spotifyLink} 
      appleLink={appleLink} 
      youtubeLink={youtubeLink}
      />
      {/* Share button */}
      <button onClick={copyLink} className="button">
        Share Link
      </button>
      {/* Email */}
      <NewsletterForm />
      {/* VIDEO GOES HERE */}
  <div className="teaser-video">
    <video
      src={teaserVideo}
      autoPlay
      muted
      loop
      playsInline
      controls
      className="video-player"
    />
   </div>
    {/* Hidden analytics */}
      {isAdmin && <Analytics />}
  </div>
  );
}

export default App;
