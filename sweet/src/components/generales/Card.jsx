import React from "react";
import "../../styles/card.css";
import PropTypes from 'prop-types';

export default function Card(props) {
  return (
    <article className="card-container">
      <div className="card-title">
        <h2>{props.title || "Hotel 5 Estrellas"}</h2>
      </div>
      <div className="card-image">
        <img
          src={props.image || "https://picsum.photos/seed/300/300"}
          alt="imagen del hotel"
        />
      </div>
      <div className="card-subtitle">
        <span>
          {` ${props.subtitle}, ${props.subtitle2}` || "Lorem ipsum dolor"}
        </span>
      </div>
      <div className="card-description">
        <p>
          {props.description ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam"}
        </p>
      </div>
      <div className="card-categories">
        <div className="card-category">
          <i className="material-icons">{props.icon1 || "exit_to_app"}</i>{" "}
          <span>{props.qty_icon1 || "4"}</span>
        </div>
        <div className="card-category">
          <i className="material-icons">{props.icon2 || "exit_to_app"}</i>{" "}
          <span>{props.qty_icon2 === 1 ? ' $ ' : props.qty_icon2 === 2 ? '$$' : props.qty_icon2 === 3 ? '$$$' : "$$$$" || '  '}</span>
        </div>
        {/* <div className="card-title">
          <p>{`${new Date(props.initialDate)} - ${new Date(props.finalDate)}`} </p>
        </div> */}
        {/* <div className="card-category">
          <i className="material-icons">{props.icon3 || "exit_to_app"}</i>
          {props.qty_icon3 || "4"}
        </div> */}
      </div>
    </article>
  );
}

Card.propType = {
  title: PropTypes.string,
  image: PropTypes.string,
  subtitle: PropTypes.string,
  subtitle2: PropTypes.string,
  description: PropTypes.string
}