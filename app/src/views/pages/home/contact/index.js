import React from "react";
import { NavLink as Link } from "react-router-dom";

import HongKong from "../../../../resources/hongkong.png";
import Shenzhen from "../../../../resources/shenzhen.png";
import Shanghai from "../../../../resources/shanghai.png";

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
      <Link
        className="map-container"
        style={{ backgroundImage: `url(${HongKong})` }}
        to="https://www.google.com/maps?q=黃保華針車有限公司"
        target="_blank"
        rel="noopener"
      />
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
      <Link
        className="map-container"
        style={{ backgroundImage: `url(${Shenzhen})` }}
        to="https://www.google.com/maps?q=聯合廣場+中國广东省深圳市福田区岗厦"
        target="_blank"
        rel="noopener"
      />
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
      <Link
        className="map-container"
        style={{ backgroundImage: `url(${Shanghai})` }}
        to="https://www.google.com/maps?q=東方海外大廈"
        target="_blank"
        rel="noopener"
      />
    </div>
  </div>
);

export default Contact;
