import React, { useState, useEffect } from 'react';
import * as ReactDOMClient from "react-dom/client";
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
  CoverLetter,
  Loading,
  LoaderView,
} from './components';

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Simulate loading time with a delay
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    // Clear the timeout to avoid side effects if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Run once after the component mounts

  return (
    <Router>
      
      <Noise />
      {showLoader && <Loading />}
      {!showLoader && (
        <div className="Container">
          <Navigation />
          <AnimatedCursor
            innerSize={8}
            outerSize={32}
            color="216, 123, 142"
            outerAlpha={0.2}
            innerScale={0.2}
            outerScale={2}
            clickables={['a', 'select', 'textarea', 'button', '.link', 'span']}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/coverletter" element={<CoverLetter />} />
            <Route path="/loader" element={<LoaderView />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer className="Footer" />
        </div>
      )}
    </Router>
  );
};

root.render(<App />);