import React from "react";
import ReactDOM from "react-dom";
import AnimatedCursor from "react-animated-cursor";
import './index.css';
import './MPI.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Noise,
  Cursor,
  Navigation,
  Footer,
  Home,
  About,
  Portfolio,
  Contact,
  NotFoundPage,
} from "./components";

ReactDOM.render(
  <Router>
    <Noise />
      <div className="Container">
        <Navigation />
        <AnimatedCursor
      innerSize={8}
      outerSize={32}
      color='216, 123, 142'
      outerAlpha={0.2}
      innerScale={0.2}
      outerScale={2}
      clickables={[
        'a',
        'select',
        'textarea',
        'button',
        '.link',
        'span'
      ]}
    />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer className="Footer" />
      </div>
  </Router>,

  document.getElementById("root")
);
