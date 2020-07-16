import React from "react";

const Card = (props) => {
    return(
        <div className="card">
        <div className="img-container">
          <img
            alt={props.name}
            src={props.image}
            width="200" 
            height="150"
          />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>House:</strong> {props.house}
            </li>
            <li>
              <strong>Nickname:</strong> {props.nickname}
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Card;