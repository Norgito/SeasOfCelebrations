import "../styles/WaveTop.css";
import "animate.css";

const WaveTop = () => {
  return (
    <div>
      <div className="headerWave">
        <div className="inner-header flexWave animate__animated animate__delay-2s animate__slower animate__zoomIn">
          <div className="bg-white/80 lg:mt-[250px] px-4 rounded-full shadow-1 shadow-white ">
            <p className="AnimatedBg text-[35px] md:text-[60px] lg:text-[70px]  font-secondary filter drop-shadow-md ">
              Party Supplies & Rentals
            </p>
          </div>
        </div>
        <div className="-mt-[120px] md:mt-0">
          <svg
            className="waves"
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
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={3}
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={5}
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WaveTop;
