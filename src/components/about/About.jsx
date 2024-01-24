import React from "react";
import './About.css';
import useScrollReveal from '../../hooks/useScrollReveal'

function About() {
  useScrollReveal('.reveal');
  return (
    
    <div className="About">
      <div>
        <h1 className="reveal">About</h1>
      </div>

      <div className="AboutCopy">
        <p className="reveal">
          Greetings Earthling 🖖,
        </p>
        <p className="reveal">
        I am a seasoned Graphic, UI, and Web Designer with over a decade of experience working in both advertising agencies and IT companies. Additionally, I possess a deep passion for illustration 🎨 and music, making me a well-rounded creative professional.
        </p>
        <p className="reveal">
        In my view, design goes beyond mere communication and functionality. It has the power to evoke emotions and create a connection with <span className="Rosewood Italic">humans</span>. Interfaces are not just abstract artifacts for machines; they are also powerful languages. Just like language itself, design should be treated as a precious art form, capable of conveying poetry and beauty.
        </p>
        <p className="reveal">Currently based in the enchanting land of Canada 🍁, I bring a diverse set of skills and experiences to my work, ensuring that every project I undertake is infused with creativity and a keen understanding of user experience.</p>
      </div>

      <div className="Loop">
        <img  src="/assets/loop.gif"/>
      </div>

    </div>
  );
}

export default About;
