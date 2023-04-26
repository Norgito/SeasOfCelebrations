import React from "react";
import "../styles/Waves.css";

const Waves = () => {
  return (
    <>
      <div>
        <div className="headerWave">
          <div className="inner-header flexWave">
          </div>
          <div>
            <svg
              className="wavesHeader"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={0}
                  fill="rgba(66, 180, 230, 0.7)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={3}
                  fill="rgba(91, 188, 230, 0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={5}
                  fill="rgba(101, 192, 231, 0.3)"
                />
                <use xlinkHref="#gentle-wave" x={48} y={7} fill="rgb(49,174,229)" />
              </g>
            </svg>
          </div>
        </div>
        <div className="contentWave flex">
        </div>
      </div>
    </>
  )
}

export default Waves
