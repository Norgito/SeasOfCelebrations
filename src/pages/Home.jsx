import { Confetti } from "../utils/Confetti";
import ServiceList from "../components/ServiceList";
import BoxInfo from "../components/BoxInfo";
import ProductList from "../components/ProductList";
import RentList from "../components/RentList";
import "../index.css";
import RentBalloons from "../components/RentBalloons";
import ProductBalloons from "../components/ProductBalloons";
import ServiceBalloons from "../components/ServiceBalloons";

const Home = () => {
  return (
    <div className="rounded-lg ">
      <div className="z-10">
        <Confetti />
      </div>
      <div className="mt-12 px-4 rounded-full shadow-1 shadow-white flex flex-col justify-center items-center">
        <p className="AnimatedBg text-[35px] md:text-[60px] lg:text-[70px]  font-secondary filter drop-shadow-md ">
          Your Home for
        </p>
        <br />
        <p className="AnimatedBg text-[35px] md:text-[60px] lg:text-[70px]  font-secondary filter drop-shadow-md ">
          Party Supplies and Rentals!
        </p>
      </div>
      <div className="mt-6">
        <BoxInfo />
      </div>
      <div className="-mt-6">
        <ServiceBalloons />
        <ServiceList />
        <RentBalloons />
        <RentList />
        <ProductBalloons />
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
