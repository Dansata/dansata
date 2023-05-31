import React from "react";
import './Work.css';
import Card from "./card/Card";
import worksDB from "./works.js"

function Portfolio() {
  return (
    <div className="Work">
      <div className="Title">
        <h1>Portfolio</h1>
      </div>
      <div className="CardContainer">
        {worksDB.map(worksDB => (
          <Card
            key={worksDB.id}
            title={worksDB.title}
            image={worksDB.image}
            year={worksDB.year}
            company={worksDB.company}
            link={worksDB.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
