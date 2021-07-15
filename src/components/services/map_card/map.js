import React from "react";
import "./map.css";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <div className="container_2">
      <div className="map_wrapper">
        {/* <div className="get_location">
                </div> */}
        <div className="map">
          <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
          ></GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));
