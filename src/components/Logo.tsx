import React from "react";

interface ThemeProps {
  theme: "dark" | "light";
}

const Logo: React.FC<ThemeProps> = ({ theme }) => (
  <svg
    width="150"
    height="50"
    viewBox="0 0 200 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="110"
      y="5"
      width="70"
      height="40"
      fill={theme === "dark" ? "#ff7129" : "#700480"}
      rx="5"
    />
    <text
      x="10"
      y="35"
      fontFamily="Arial, sans-serif"
      fontSize="30"
      fontWeight="bold"
      fill={theme === "dark" ? "white" : "black"}
    >
      Arthas
    </text>
    <text
      x="115"
      y="35"
      fontFamily="Arial, sans-serif"
      fontSize="30"
      fontWeight="bold"
      fill={theme === "dark" ? "black" : "white"}
    >
      Hub
    </text>
  </svg>
);

export default Logo;
