import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import PropTypes from "prop-types";

const MapComponent = withGoogleMap(({ lat, lng }) => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat, lng }}>
    <Marker position={{ lat, lng }} />
  </GoogleMap>
));

const Map = ({ lat, lng }) => (
  <MapComponent
    loadingElement={<div className="map-loading" />}
    containerElement={<div className="map-container" />}
    mapElement={<div className="map-ready" />}
    lat={lat}
    lng={lng}
  />
);

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
};

export default Map;
