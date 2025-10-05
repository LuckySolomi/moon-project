import React, { useState } from "react";

const ArrowIcon = ({ rotated, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: rotated ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <defs>
        <linearGradient id="arrowGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#963488" />
          <stop offset="50%" stopColor="#FC6F32" />
          <stop offset="100%" stopColor="#FF4A59" />
        </linearGradient>
      </defs>

      <rect
        x="0.5"
        y="0.5"
        width="55"
        height="55"
        rx="27.5"
        stroke={hovered ? "url(#arrowGradient)" : "white"}
      />
      <path
        d="M28 21L34 27M28 21L22 27M28 21V35"
        stroke={hovered ? "url(#arrowGradient)" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
