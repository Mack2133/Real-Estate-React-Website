import React, { createContext, useEffect, useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import PropertyList from "../components/PropertyList";
import JSONfile from '../assets/properties.json';

function MainPage() {

   const [propertyList, setPropertyList] = useState(JSONfile.properties);  
   const [searchData, setsearchData] = useState({
    postcode: '',
    type: '',
    bedrooms: '',
    fromDate: '',
    toDate: '',
    minPrice: '',
    maxPrice: '',
  });

  return (
    <>
      <Header searchData={searchData} setsearchData={setsearchData}/>
      <PropertyList propertyList={propertyList} setPropertyList={setPropertyList} searchData={searchData} setsearchData={setsearchData}/>
      <Footer />
    </>
  );
}

export default MainPage;

