import React from "react";
import './JobCard.css';

import useScrollReveal from '../../../hooks/useScrollReveal';

function JobCard(props) {
    useScrollReveal('.reveal');
    return (
        <div key={props.id} className="JobCard">
            <h4>{props.thejob}</h4>
            <p className="Italic Rosewood">{props.thecompany}</p>
            <p>{props.thedate}</p>
            <div className="Pills">
                {props.thetags.map((tag, index) => (
                    <span key={index} className="Pill">
                        {tag}
                    </span>
                ))}

            </div>

        </div>
    );
}

export default JobCard