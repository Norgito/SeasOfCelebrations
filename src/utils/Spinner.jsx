import { useEffect } from "react";
import "../styles/Spinner.css";

const Spinner = ({ key }) => {
  useEffect(() => {
    document.querySelector("body").classList.remove("loaded");
    setTimeout(function () {
      document.querySelector("body").classList.add("loaded");
    }, 2000);
  }, [key]);

  return (
    <div className="">
      <div>
        <div id="loader-wrapper">
          <div id="loader" />
          <div className="loader-section section-left" />
          <div className="loader-section section-right" />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
