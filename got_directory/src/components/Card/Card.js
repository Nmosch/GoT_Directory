import React from "react";
import "./style.css";

const Card = ({ results }) => {
    return(
        <>
        {results.map(character=>{
            return (
                <div className="card" key={character.id}>
                <div className="img-container">
                  <img
                    alt={character.name}
                    src={character.image}
                    width="200" 
                    height="150"
                  />
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <strong>Name:</strong> {character.name}
                    </li>
                    <li>
                      <strong>House:</strong> {character.house}
                    </li>
                    <li>
                      <strong>Nickname:</strong> {character.nickname}
                    </li>
                  </ul>
                </div>
              </div>
            )
        })
        }
      </>
    );
};

export default Card;