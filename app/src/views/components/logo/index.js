import React from "react";

const Logo = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
    <rect x="0" y="0" width="400" height="400" fill="#ff0000" />
    <rect
      x="15"
      y="15"
      width="370"
      height="370"
      fill="none"
      stroke="#ffffff"
      strokeWidth="10"
    />
    <path
      d="M40 80 L100 320 L160 320 L200 180 L240 320 L300 320 L360 80 L310 80 L270 260 L220 80  L180 80 L130 260 L90 80 Z"
      stroke="none"
      fill="#ffffff"
    />
  </svg>
);

export default Logo;
