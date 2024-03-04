import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";


function FavoriteCard({ favorites, removeFromFavourites}) {
  const { type, bedrooms, price, location, description, picture, id } = favorites;

  const shortDescription = (text, maxWords) => {
    const words = text.split(' ');
    const shorted = words.slice(0, maxWords).join(' ');

    if (words.length > maxWords) {
      return `${shorted}...`;
    }

    return shorted;
  };
 
  const shortedDescription = shortDescription(description, 20);

  
  return (
    <div>
      <div className="card" style={{ width: "16rem" }} >
      <Link to={`/${id}`} style={{textDecoration:"none"}}>
            <div className="card">
            <img src={picture[0]} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{type} in {location}</h5>
            <p className="card-text">
              {shortedDescription}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">PRICE: ${price}</li>
            <li className="list-group-item">Bedrooms: {bedrooms}</li>
          </ul>
            </div>
          </Link>
        <div className="card-body">
          <button className="btn btn-primary" onClick={removeFromFavourites}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
