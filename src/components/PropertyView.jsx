import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
import JSONfile from "../assets/properties.json";
import Header from "./Header";
import Footer from "./Footer";


export const PropertyView = () => {
  let { id } = useParams();

  const { properties } = JSONfile;
  const property = properties.find((prop) => prop.id === id);
  const { description, type, bedrooms, price, location, added, url, floorPlan } = property;

  const images = property.picture.map((pic) => {
    return {
      original: pic,
      thumbnail: pic,
    };
  })

  return (
    <div>
      <Header searchData={''} setsearchData={''}/>
      <div className="container my-4 border border-2 p-4 rounded">
      <div className="row d-flex justify-content-center align-items-start">
        <div className="col-12 col-md-5 mb-3 mb-md-0">
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
            showIndex={true}
            showNav={false}
          />
        </div>
        <div className="col-12 col-md-7 ">
          <div className="row">
            <Tabs>
              <TabList className="nav nav-tabs text-dark" style={{backgroundColor: "#00ecc1f2 "}}>
                <Tab className="nav-item nav-link custom-tab" style={{cursor:"pointer"}}>Details</Tab>
                <Tab className="nav-item nav-link custom-tab" style={{cursor:"pointer"}}>Google Map</Tab>
                <Tab className="nav-item nav-link custom-tab" style={{cursor:"pointer"}}>Floor Plan</Tab>
              </TabList>

              <div className="tab-content mt-3">
                <TabPanel>
                  <div>
                    <p className="lead">{description}</p>
                    <p className="fs-5">Price: {price}</p>
                    <p className="fs-5">Bedrooms: {bedrooms}</p>
                    <p className="fs-5">Type: {type}</p>
                    <p className="fs-5">Location: {location}</p>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="container">
                    <iframe
                      src={url}
                      style={{ border: "0", borderRadius: "5px", width: "100%", height: "400px"}}
                      allowFullScreen={""}
                      loading="lazy"
                      referrerPolicy={"no-referrer-when-downgrade"}
                    ></iframe>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>
                    <img src={floorPlan} className="img-fluid" style={{maxwidth: "100%", height:"400px"}}/>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};
