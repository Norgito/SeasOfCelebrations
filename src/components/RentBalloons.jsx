import Balloon2 from "../assets/balloon2.png";
import { Fade } from "react-awesome-reveal";

const RentBalloons = () => {
  return (
    <div className="text-[40px] font-secondary text-center Center flex-col react-floater-animated">
      <img src={Balloon2} alt="Rent Balloon" className="w-[120px] lg:mr-[345px] absolute" />
      <img
        src={Balloon2} alt="Rent Balloon"
        className="w-[120px] lg:ml-[345px] absolute hidden lg:block"
      />
      <div className="z-20 Center">
        <p className="text-white ColorRent shadow-lg rounded-full md:w-[400px] w-[350px] mt-[170px]">
          <Fade delay={500} cascade damping={0.06}>
            Rent
          </Fade>
        </p>
      </div>
    </div>
  );
};

export default RentBalloons;
