import React from "react";
import { Balloons } from "../utils/Balloons";
import "../styles/seaBalloons.css"

function SeaBalloons() {
  // Call the function from myCode.js

  return (
    // Your component JSX here
      <div className="w-[1400px] canva flex justify-center items-center  overflow-hidden">
          {Balloons()};
    </div>
  );
}

export default SeaBalloons;
