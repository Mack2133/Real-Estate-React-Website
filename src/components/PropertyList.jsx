import React, { useState } from 'react';
import './PropertyList.css';
import PropertyCard from './PropertyCard';
import FavoriteCard from '../components/FavoriteCard';
import { useDrop } from "react-dnd";

function PropertyList({propertyList,searchData}) {

  const [favorites, setFavorites] = useState([]);

console.log(searchData, "hello")

  const filterProperties = (properties, advanceSearch) => {

    const { location, type, bedrooms, added, minPrice, maxPrice, fromDate, toDate } = advanceSearch;

    function monthStringToNumber(monthString) {
      const allMonths = {
        "January": 1,
        "February": 2,
        "March": 3,
        "April": 4,
        "May": 5,
        "June": 6,
        "July": 7,
        "August": 8,
        "September": 9,
        "October": 10,
        "November": 11,
        "December": 12,
      };
    
      return allMonths[monthString];
    }


    function formatDate(date) {
       if (!date) return null;

      const { month, day, year } = date;
      const monthNumber = monthStringToNumber(month);
      const formattedDate = new Date(`${monthNumber} ${day}, ${year}`).toLocaleDateString('en-GB');
      return formattedDate;
    }

    const formattedDate = formatDate(added);
  
    return properties.filter((item) => {
      const lowerInputLocation = location ? location.toLowerCase() : '';
      const lowerType = type ? type.toLowerCase() : '';
      const lowerBedrooms = bedrooms ? bedrooms.toString().toLowerCase() : '';
      const lowerDate = formattedDate ? formattedDate.toLowerCase() : '';
  
      const isPriceInRange = (!minPrice || item.price >= minPrice) && (!maxPrice || item.price <= maxPrice);
  
      const itemLocationWords = item.location.toLowerCase().split(' ');
      const lastWordInLocation = itemLocationWords[itemLocationWords.length - 1];
      const isLocationMatch = lastWordInLocation === lowerInputLocation || item.location.toLowerCase().includes(lowerInputLocation);
  
      const itemDate = formatDate(item.added);
      const isDateInRange = (!fromDate || itemDate >= fromDate) && (!toDate || itemDate <= toDate);
  
      return (
        isLocationMatch &&
        (!type || item.type.toLowerCase().includes(lowerType)) &&
        (!bedrooms || item.bedrooms.toString().toLowerCase().includes(lowerBedrooms)) &&
        (!formattedDate || new Date(formattedDate).toISOString().includes(lowerDate)) &&
        isPriceInRange &&
        isDateInRange
      );
    });
  };

  const filteredProperties = filterProperties(propertyList, searchData);

  const removeFromFavourites = (id) => {
    setFavorites(favorites.filter(favorite => favorite.id !== id));
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item, monitor) => addToFavorites(item.property),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  
  function addToFavorites(property) {
    if (!favorites.some(favorite => favorite.id === property.id)) {
      setFavorites(prevFavorites => [...prevFavorites, property]);
    }
  }
  
  return (
    <>
      <div className="container-fluid my-5" style={{minHeight: "400px"}}>
      <div className="row gap-4  justify-content-center">
        <div className="col-12 col-md-7 order-1">
         <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center gap-4 p-1 py-4" style={{minHeight: "400px", border: "1px solid #8ea499", backgroundColor: "#f5f7f6", borderRadius:"6px"}}>

          {filteredProperties.map((property, index) => (
              <PropertyCard
                key={index}
                property={property}
                favorites={favorites}
                setFavorites={setFavorites}

              />
            ))}
          </div>
         </div>
        </div>
        <div ref={drop} className="col-12 col-md-4 px-4 py-4 d-flex flex-wrap justify-content-center gap-4 align-self-start" style={{minHeight: "400px", border: "1px solid #8ea499", backgroundColor: "#f5f7f6", borderRadius:"6px"}}>
          <div className='display-2'>Favourites</div>
          {favorites && favorites.map((favoritesItem, index) => {
              return (
              <FavoriteCard key={index} 
              favorites={favoritesItem} 
              removeFromFavourites={() => removeFromFavourites(favoritesItem.id)} />);
            })}
        </div>
      </div>
    </div>
    </>
  );
}

export default PropertyList;
