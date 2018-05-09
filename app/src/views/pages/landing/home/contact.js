import React from "react";
import { NavLink as Link } from "react-router-dom";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import PropTypes from "prop-types";

import "./contact.css";

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

const Contact = () => (
  <div id="contact-container">
    <div id="contact-title">聯絡</div>
    <div className="contact-content">
      <div className="contact-info">
        <div className="content-title">香港總公司</div>
        <div className="content-address">九龍荔枝角道78-80號</div>
        <div className="content-phone">
          <p>
            電話：<span>+852</span> 2391 6768
          </p>
          <p>
            傳真：<span>+852</span> 2789 1538
          </p>
          <p>
            電郵：<Link to="mailto://info@wongpowah.com.hk">
              info@wongpowah.com.hk
            </Link>
          </p>
        </div>
      </div>
      <Map lat={22.324302} lng={114.166341} />
    </div>
    <div className="contact-branch">華裔針車（深圳）有限公司</div>
    <div className="contact-content">
      <div className="contact-info secondary">
        <div className="content-title">深圳總公司</div>
        <div className="content-address">
          廣東省深圳市福田區
          <br />
          濱河大道5022號
          <br />
          聯合廣場 A座
          <br />
          2210室
          <br />
          郵政編碼：518000
        </div>
        <div className="content-phone">
          <p>
            電話：<span>+86 755</span> 2360 4173
          </p>
        </div>
      </div>
      <Map lat={22.529952} lng={114.068913} />
    </div>
    <div className="contact-content">
      <div className="contact-info secondary">
        <div className="content-title">上海支行</div>
        <div className="content-address">
          上海市延安中路841號
          <br />
          東方海外大廈
          <br />
          1701室
        </div>
        <div className="content-phone">
          <p>
            電話：<span>+8621</span> 6289 6086
          </p>
          <p>
            傳真：<span>+8621</span> 6289 6087
          </p>
        </div>
      </div>
      <Map lat={31.223239} lng={121.454261} />
    </div>
  </div>
);

export default Contact;
