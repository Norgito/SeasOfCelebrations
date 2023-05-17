import Balloon3 from "../assets/balloon3.png";
import { Fade } from "react-awesome-reveal";

const ProductBalloons = () => {
  return (
    <div className="text-[40px] font-secondary text-center Center flex-col px-6 react-floater-animated ">
      <img src={Balloon3} className="w-[120px] lg:mr-[345px] absolute" />
      <img
        src={Balloon3}
        className="w-[120px] lg:ml-[345px] absolute hidden lg:block"
      />
      <div className="z-20 Center">
        <p className="text-white ColorProd shadow-lg rounded-full md:w-[400px] w-[350px] mt-[170px]">
          <Fade delay={500} cascade damping={0.06}>
            Products
          </Fade>
        </p>
      </div>
    </div>
  );
};

export default ProductBalloons;
