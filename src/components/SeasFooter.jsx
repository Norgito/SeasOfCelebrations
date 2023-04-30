import Wave from "react-wavify";

const SeasFooter = () => {
  return (
    <div className="flex justify-center items-center -z-0">
      <Wave
        fill="url(#gradient)"
        paused={false}
        options={{
          height: 20,
          amplitude: 60,
          speed: 0.15,
          points: 3,
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="#0096d8" />
            <stop offset="90%" stopColor="#e3f5ff" />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  );
};

export default SeasFooter;
