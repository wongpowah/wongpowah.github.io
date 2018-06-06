import React from "react";
import { NavLink as Link } from "react-router-dom";

import "./style.css";

export default () => (
  <div id="footer-wrapper">
    <div id="footer">
      <div id="signature">
        Made with <span>♥</span> by{" "}
        <Link to="https://Jswifty.github.io" target="_blank">
          John Wong
        </Link>
      </div>
    </div>
  </div>
);
