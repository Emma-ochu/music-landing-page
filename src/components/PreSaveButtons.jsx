// src/components/PreSaveButtons.js
import React from "react";

function PreSaveButtons({ spotifyLink, appleLink, youtubeLink }) {

  const handleClick = (platform, url) => {

    if (!url) {
      alert("Link not available yet");
      return;
    }
    // Get existing data
    const clicks = JSON.parse(localStorage.getItem("clicks")) || {
      spotify: 0,
      apple: 0,
      youtube: 0,
    };
    console.log(clicks);

    // Increase count
    clicks[platform] += 1;

    // Save back
    localStorage.setItem("clicks", JSON.stringify(clicks));

    // Open link
    window.open(url, "_blank");
  };

  return (
    <div className="pre-save">
      <p className="cta-text">
        Stream it now on your favorite platform 
      </p>

      <a href="#" onClick={(e)=> {
        e.preventDefault();
         handleClick("spotify", spotifyLink)
        }}
         className="button spotify">
          Listen on Spotify
          </a>
         <a href="#" onClick={(e)=> {
        e.preventDefault();
         handleClick("apple", appleLink)
        }}
         className="button apple">
          Listen on Apple
          </a>

        <a href="#" onClick={(e)=> {
        e.preventDefault();
         handleClick("youtube", youtubeLink)
        }}
         className="button youtube">
          Watch on Youtube
          </a>
      
     
      
    </div>
  );
}

export default PreSaveButtons;