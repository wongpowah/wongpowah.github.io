import React from "react";
import GoogleMapReact from "google-map-react";

import PropTypes from "prop-types";

import Logo from "../../../../../resources/logo.png";

const Marker = () => (
  <div className="map-marker">
    <span />
    <img src={Logo} alt="marker" />
  </div>
);

const Map = ({ lat, lng }) => (
  <div className="map-container">
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyBscHxR1IISA-NVEUqbM8wICGDEqZ5RgH4" }}
      defaultCenter={{ lat, lng }}
      defaultZoom={15}
    >
      <Marker lat={lat} lng={lng} />
    </GoogleMapReact>
  </div>
);

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
};

export default Map;
