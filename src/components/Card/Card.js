import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectJeep(props.number)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.number} src={props.image} />
            </a>
        </div>
    </div>
);

export default Card;
