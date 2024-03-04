import {Link} from "react-router-dom";
import { useDrag } from "react-dnd";
import "./PropertyCard.css"

function PropertyCard({ property,favorites,setFavorites, addToFavorites }) { 
  const { type, bedrooms, price, location, description, picture, id } = property;

  const shortDescription = (text, maxWords) => {
    const words = text.split(' ');
    const shorted = words.slice(0, maxWords).join(' ');

    if (words.length > maxWords) {
      return `${shorted}...`;
    }

    return shorted;
  };

   function addToFavorites(){
    if (!favorites.includes(property)) {
      setFavorites([...favorites, property]);
    }
  }

  const shortedDescription = shortDescription(description, 25);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id, property },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
      <div>
        <div className="card" style={{ width: "16rem" }} ref={drag}>
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
            <button className="btn btn-primary" onClick={addToFavorites}>Add To Favorite</button>
          </div>
        </div>
      </div>
   
  );
}

export default PropertyCard;
