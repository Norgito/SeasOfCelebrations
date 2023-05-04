import { Confetti } from "../utils/Confetti";
import HouseList from "../components/ServiceList";
import BoxInfo from "../components/BoxInfo";
import ProductList from "../components/ProductList";
import RentList from "../components/RentList";
import "../index.css";
import Balloon from "../assets/balloon.png";
import Balloon2 from "../assets/balloon2.png";
import Balloon3 from "../assets/balloon3.png";
import InstagramIcon from "../utils/Icons/InstagramIcon";
import WhatsappIcon from "../utils/Icons/WhatsappIcon";

const Home = () => {
  return (
    <>
      <Confetti />
      <div className="text fixed m-4 bottom-0 z-30">
        <WhatsappIcon />
        <InstagramIcon />
      </div>
      <div className="mt-10">
        <BoxInfo />
      </div>
      <div className="mt-6 ">
        <div className="text-[40px] font-secondary text-center Center flex-col react-floater-animated ">
          <img src={Balloon} className="w-[120px] mr-[445px] absolute" />
          <img src={Balloon} className="w-[120px] ml-[445px] absolute" />
          <div className="z-20 Center ">
            <p className="text-white ColorSer shadow-lg rounded-full w-[500px] mt-[180px]">
              Services
            </p>
          </div>
        </div>
        <HouseList />
        <div className="text-[50px] font-secondary text-center Center flex-col px-6 react-floater-animated ">
          <img src={Balloon2} className="w-[120px] mr-[445px] absolute" />
          <img src={Balloon2} className="w-[120px] ml-[445px] absolute" />
          <div className="z-20 Center">
            <p className="text-white ColorRent shadow-lg rounded-full container gap-4 w-[500px] mt-[180px]">
              Rent
            </p>
          </div>
        </div>
        <RentList />
        <div className="text-[50px] font-secondary text-center Center flex-col px-6 react-floater-animated ">
          <img src={Balloon3} className="w-[120px] mr-[445px] absolute" />
          <img src={Balloon3} className="w-[120px] ml-[445px] absolute" />
          <div className="z-20 Center">
            <p className="text-white ColorProd shadow-lg rounded-full container gap-4 w-[500px] mt-[180px]">
              Products
            </p>
          </div>
        </div>
        <ProductList />
      </div>
    </>
  );
};

export default Home;
