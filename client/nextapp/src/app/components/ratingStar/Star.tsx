"use client";


import React from "react";


type IStar = {
    fill:boolean
  };
const Star: React.FC<IStar> = (props) => {
  return (
    <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_50)">
      <path
        d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z"
        fill={props.fill? "#F7B559" :"#fff"}
        stroke="#F7B559"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_50">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
  );
};

export default Star;
