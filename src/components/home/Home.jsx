import React from "react";
import './Home.css';
import VideoBg from "./videobg/VideoBg";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="HomePage">
      <VideoBg />
      <h1 class="font-weight-light">Daniel <br/>Alvarez</h1>
      <br/>
      <p>
        UI Designer | Web Designer | Illustrator
      </p>
      <p>
        <br />
      <NavLink className="button-home" to="/Portfolio">
            See my online portfolio →
      </NavLink>
      </p>

    </div>
  );
}

export default Home;
