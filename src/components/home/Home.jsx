import React from "react";
import './Home.css';
import VideoBg from "./videobg/VideoBg";

function Home() {
  return (
    <div className="HomePage">
      <VideoBg />
      <h1 class="font-weight-light">Daniel <br/>Alvarez</h1>
      <br/>
      <p>
        UI Designer | Web Designer | Illustrator
      </p>
    </div>
  );
}

export default Home;
