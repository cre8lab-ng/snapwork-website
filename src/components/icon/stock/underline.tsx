import React from "react";

const SVG: React.FC<{ color: string }> = ({ color }) => {
  return (
    <svg
      width="120"
      height="30"
      viewBox="0 0 120 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 20 C 25 0, 45 30, 65 20 S 105 30, 115 20"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        className={`animate-draw ${color}`} 
      />
    </svg>
  );
};

export default SVG;
