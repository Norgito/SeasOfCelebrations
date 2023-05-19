import Balloon from "../assets/balloon.png";
import { Fade } from "react-awesome-reveal";

const ServiceBalloons = () => {
  return (
    <div className="text-[40px] font-secondary text-center Center flex-col react-floater-animated ">
      <img src={Balloon} alt="Service Balloon" className="w-[120px] lg:mr-[345px] absolute" />
      <img
        src={Balloon} alt="Service Balloon"
        className="w-[120px] lg:ml-[345px] absolute hidden lg:block"
      />
      <div className="z-20 Center ">
        <p className="text-white ColorSer shadow-lg rounded-full md:w-[400px] w-[350px] mt-[170px]">
          <Fade delay={500} cascade damping={0.06}>
            Services
          </Fade>
        </p>
      </div>
    </div>
  );
};

export default ServiceBalloons;
