import React from "react";
import './Card.css';
import useScrollReveal from '../../../hooks/useScrollReveal';

function Card(props) {
  useScrollReveal('.reveal');
  return (
    <div key={props.id}className="Card grid-item reveal" >
      <a href={props.link} className="CardBody" target="_blank">
        <div className="CardPicture">
          <img src={props.image}/>
        </div>
        <div className="CardContent">
          <h3 className="CardTitle">
            {props.title}
          </h3>
          <p className="CardDescription">
            {props.year}
          </p>
          <p className="CardDetail">
            {props.company}
          </p>
        </div>
        <div className="CardCta">
          <a href={props.link} target="_blank">
          See Project →
          </a>
        </div>
      </a>
    </div>
  );
}

export default Card;
