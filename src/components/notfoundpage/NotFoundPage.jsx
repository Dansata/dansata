import React from "react";
import './NotFoundPage.css';
import { NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="NotFoundPage">
      <div>
        <h1>404</h1>
      </div>

      <div className="NotFoundPageCopy">
        <p>
          You should have never opened that door...
        </p>
        <NavLink className="nav-link" to="/">
          Back to a safe place
        </NavLink>
      </div>

      <div className="Devil">
        <img  src="/assets/404.gif"/>
      </div>

    </div>
  );
}

export default NotFoundPage;
