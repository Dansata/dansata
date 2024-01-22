import React from "react";
import './Home.css';
import VideoBg from "./videobg/VideoBg";
import { NavLink } from "react-router-dom";
import useScrollReveal from '../../hooks/useScrollReveal';

function Home() {
  useScrollReveal('.reveal');
  return (
    <div className="HomePage">
      <VideoBg />
      <h1 className="font-weight-light reveal" >Daniel <br/>Alvarez</h1>
      <br/>
      <p className="reveal">
        UI Designer | Web Designer | Illustrator
      </p>
      <p className="reveal">
        <br />
      <NavLink className="button-home reveal" to="/Portfolio">
            See my online portfolio →
      </NavLink>
      </p>

    </div>
  );
}

export default Home;
