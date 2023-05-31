import React from "react";
import './About.css';

function About() {
  return (
    <div className="About">
      <div>
        <h1>About</h1>
      </div>

      <div className="AboutCopy">
        <p>
          Greetings Earthling 🖖,
        </p>
        <p>
        I am a seasoned Graphic, UI, and Web Designer with over a decade of experience working in both advertising agencies and IT companies. Additionally, I possess a deep passion for illustration 🎨 and music, making me a well-rounded creative professional.
        </p>
        <p>
        In my view, design goes beyond mere communication and functionality. It has the power to evoke emotions and create a connection with <span className="Rosewood">humans</span>. Interfaces are not just abstract artifacts for machines; they are also powerful languages. Just like language itself, design should be treated as a precious art form, capable of conveying poetry and beauty.
        </p>
        <p>Currently based in the enchanting land of Canada 🍁, I bring a diverse set of skills and experiences to my work, ensuring that every project I undertake is infused with creativity and a keen understanding of user experience.</p>
      </div>

      <div className="Loop">
        <img  src="/assets/loop.gif"/>
      </div>

    </div>
  );
}

export default About;
