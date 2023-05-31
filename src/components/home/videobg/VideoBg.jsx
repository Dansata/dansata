import React from "react";
import './VideoBg.css';

function VideoBg() {
  return(
    <div className="VideoBg">
     <video className="VideoTag" source src="/assets/Background.mp4" type="video/mp4" autoPlay={true} loop muted/>
    </div>
  )
}
export default VideoBg;
