import React from "react";
import {Link} from "react-router-dom";
import './Contact.css'

function Contact() {
  return (
    <div className="Contact">
      <div>
        <h1>Contact</h1>
      </div>
      <div className="ContactCol">
        <button onClick={() => window.location = 'mailto:talk@dansata.com'}>
          <p>talk@dansata.com</p>
        </button>
        <button onClick={() => window.location = 'tel:3063511384'}>
          <p>+1 (306) 351 1384</p>
        </button>
        <div className="SocialLinks">

          <a href="https://www.linkedin.com/in/dansata" target="_blank">
            <img src="/assets/Likedin.svg" type="svg" alt="Linkedin"/>
          </a >
          <a href="https://bit.ly/3QSqzFC" target="_blank">
            <img className="Svg" src="/assets/Figma.svg" type="svg" alt="Figma"/>
          </a>
          <a href="https://www.behance.net/dansata" target="_blank">
            <img src="/assets/Behance.svg" type="svg" alt="Behance"/>
          </a>
          <a href="https://dribbble.com/dansata" target="_blank">
            <img src="/assets/Dribbble.svg" type="svg" alt="Dribbble"/>
          </a>
          <a href="https://open.spotify.com/user/12178267666?si=9de9396593ac4e57" target="_blank">
            <img src="/assets/Spotify.svg" type="svg" alt="Spotify"/>
          </a>
          

        </div>
      </div>

    </div>
  );
}

export default Contact;
