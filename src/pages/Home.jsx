
import { Confetti } from "../utils/Confetti";
import HouseList from "../components/HouseList";
import BoxInfo from "../components/BoxInfo";
import "../styles/Wrap.css";
import ProductList from "../components/ProductList";
import RentList from "../components/RentList";
import ItemCount from "../components/ItemCount";

const Home = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Confetti style={{ position: "absolute", zIndex: "999" }} />
      </div>

      <div className="text-[80px] font-secondary text-center flex flex-col text-white  p-6">
        <span className="">Welcome to Seas of Celebrations</span>
      </div>
      <div className="">
        <BoxInfo />
      </div>
      <div className="text-[80px] font-secondary text-center flex flex-col text-white  p-6">
        <span className="">
          Your Home for <br /> Party Supplies and Rentals
        </span>
      </div>
      <div className="m-12">
        <div className="text-[80px] font-secondary text-center flex flex-col text-blue-700  px-6">
          <span className="">Services</span>
        </div>
        <HouseList />
        <div className="text-[80px] font-secondary text-center flex flex-col text-blue-700  px-6">
          <span className="">Rent</span>
        </div>
        <RentList />
        <div className="text-[80px] font-secondary text-center flex flex-col text-blue-700  px-6">
          <span className="">Products</span>
        </div>
        <ProductList />
      </div>
    </>
  );
};

export default Home;
