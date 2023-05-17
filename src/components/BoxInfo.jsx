import "../styles/boxInfo.css";
import Conf from "../assets/img/Cone.png";
import RentIcon from "../assets/img/RentIcon.png";
import Deco from "../assets/img/Deco.png";
import { Fade } from "react-awesome-reveal";

const BoxInfo = () => {
  return (
    <div className="Center ">
      <div className="lg:flex justify-center items-center  font-extralight z-0">
        <div className="card z-0">
          <div className="icon">
            <img src={Deco} className="w-[110px] z-10" />
          </div>

          <div className="content z-0">
            <h2 className="bg-white/30 rounded-full py-2">
              <Fade delay={500} cascade damping={0.03}>
                DECORATION
              </Fade>
            </h2>
              <p className="text-[15px]">
                We decorate your event with balloons to create a magical and
                memorable atmosphere. We offer custom designs and colors to add
                a special touch to any occasion..
              </p>
          </div>
        </div>
        <div className="card lg:scale-110">
          <div className="icon">
            <img src={RentIcon} className="w-[100px] z-10" />
          </div>
          <div className="content">
            <h2 className="bg-white/30 rounded-full py-2">
              <Fade delay={700} cascade damping={0.03}>
                RENT
              </Fade>
            </h2>
              <p className="text-[15px]">
                At Seas of Celebrations, we offer rental services for events
                including tables, chairs, tents, lighting, and more. We create
                the ideal atmosphere for weddings and parties.
              </p>
          </div>
        </div>
        <div className="card z-0">
          <div className="icon">
            <img src={Conf} className="w-[100px] z-10" />
          </div>
          <div className="content">
            <h2 className="bg-white/30 rounded-full py-2">
              <Fade delay={900} cascade damping={0.03}>
                PRODUCTS
              </Fade>
            </h2>
              <p className="text-[15px]">
                Shop our delightful selection of event decorations: vibrant
                balloons, whimsical garlands, and charming accessories. Create a
                festive atmosphere with our high-quality products.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxInfo;
