import React from "react";
import { NavLink as Link } from "react-router-dom";

import Map from "../../../components/map";

import "./style.css";

const Contact = () => (
  <div id="contact-container" className="container">
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
      <div className="map-container">
        <Map center={{ lat: 22.324302, lng: 114.166341 }} zoom={15} />
      </div>
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
      <div className="map-container">
        <Map center={{ lat: 22.529952, lng: 114.068913 }} zoom={15} />
      </div>
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
      <div className="map-container">
        <Map center={{ lat: 31.223239, lng: 121.454261 }} zoom={15} />
      </div>
    </div>
  </div>
);

export default Contact;