/* global google */

import React, { Component } from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./style.css";

const { REACT_APP_GOOGLE_API_KEY: API_KEY } = process.env;
let mapAPIInitiated = false;
let mapAPILoaded = false;
let mapLoadListeners = [];

window.onGoogleAPILoaded = () => {
  mapLoadListeners.map(event => event());
  mapAPILoaded = true;
};

const checkGoogleMapAPI = loadMap => {
  if (!mapAPIInitiated) {
    mapAPIInitiated = true;

    let googleAPIScript = document.createElement("script");
    googleAPIScript.type = "text/javascript";
    googleAPIScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=onGoogleAPILoaded`;
    googleAPIScript.async = true;
    googleAPIScript.defer = true;

    document.body.appendChild(googleAPIScript);
  }

  if (!mapAPILoaded) {
    mapLoadListeners.push(loadMap);
  } else {
    this.loadMap();
  }
};

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };

    checkGoogleMapAPI(() => this.loadMap());
  }

  loadMap() {
    const { center, zoom } = this.props;
    const { Map, Marker } = google.maps;

    let map = new Map(this.map, { center, zoom });

    map.addListener("idle", () => this.setState({ loading: false }));

    new Marker({ map, position: center });
  }

  render() {
    const { loading } = this.state;

    return (
      <div
        className={ClassNames("map", { loading })}
        ref={m => (this.map = m)}
      />
    );
  }
}

Map.propTypes = {
  center: PropTypes.shape({ lat: PropTypes.number, lng: PropTypes.number }),
  zoom: PropTypes.number
};

export default Map;
