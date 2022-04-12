import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
// import the mapbox styles
// alternatively can use a link tag in the head of public/index.html
// see https://docs.mapbox.com/mapbox-gl-js/api/
import "mapbox-gl/dist/mapbox-gl.css";
import "./mapbox.css";
import { motion } from "framer-motion";
import NavbarTrails from "../components/NavbarTrails";

// Public token
// mapbogl.accessToken = "pk.eyJ1IjoibmRhZ29zdGlubyIsImEiOiJjbDB0MXA0b2QwOGI4M3BueWxpcGF1NzdlIn0.Fz0VM31QViCG6aVnsXvGXA"

// Restricted
mapboxgl.accessToken =
  "pk.eyJ1IjoibmRhZ29zdGlubyIsImEiOiJjbDF3ZXE4MzYwMDBrM3Bzam9uNmtmdjZ4In0.Vi4KxKVhSJma29bHYmfnWA";

/**
 * Our custom Popup component used to render a nicely styled
 * map popup with additional information about the
 * user's selected bus route
 */
const Popup = ({ routeName, id, type }) => (
  <div className="popup">
    <h3 className="route-name">{routeName}</h3>
    <div className="route-metric-row"></div>
    <div className="route-metric-row">
      <h4 className="row-title">Route Type</h4>
      <div className="row-value">{type}</div>
    </div>
    <p className="route-id">
      <a href={routeName}> View More </a>
    </p>
  </div>
);

const Map = () => {
  const mapContainer = useRef();
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  // this is where all of our map logic is going to live
  // adding the empty dependency array ensures that the map
  // is only rendered once
  useEffect(() => {
    // create the map and configure it
    // check out the API reference for more options
    // https://docs.mapbox.com/mapbox-gl-js/api/map/
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/ndagostino/cl0t1qwvv002515oy5cu526iy",
      center: [-106.071, 39.462],
      zoom: 15.15,
    });

    /**
     * Event handler for defining what happens when a user clicks on the map
     * In this example, we are checking if the user has clicked on a bus route
     * If they have, we want to render a popup with the data for the selected
     * bus route
     * Else, do nothing
     */
    map.on("click", (e) => {
      const features = map.queryRenderedFeatures(e.point);
      if (features.length > 0) {
        const feature = features[0];
        // create popup node
        const popupNode = document.createElement("div");
        ReactDOM.render(
          <Popup
            routeName={feature?.properties?.name}
            id={feature?.id}
            type={feature?.properties?.description}
          />,
          popupNode
        );
        popUpRef.current
          .setLngLat(e.lngLat)
          .setDOMContent(popupNode)
          .addTo(map);
      }
    });

    // cleanup function to remove map on unmount
    return () => map.remove();
  }, []);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <NavbarTrails style={{position:"fixed"}} />
      <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />
    </motion.div>
  );
};

export default Map;
