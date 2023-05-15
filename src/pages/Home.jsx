import { Confetti } from "../utils/Confetti";
// import ServiceList from "../components/ServiceList";
import BoxInfo from "../components/BoxInfo";
// import ProductList from "../components/ProductList";
// import RentList from "../components/RentList";
import "../index.css";
import RentBalloons from "../components/RentBalloons"
import ProductBalloons from "../components/ProductBalloons"
import ServiceBalloons from "../components/ServiceBalloons";


const Home = () => {
  return (
    <div className="rounded-lg ">
      <div className="z-10">
      <Confetti />
      </div>
      <div className="mt-6">
        <BoxInfo />
      </div>
      <div className="-mt-6">
        <ServiceBalloons />
        {/* <ServiceList /> */}
        <RentBalloons />
        {/* <RentList /> */}
        <ProductBalloons />
        {/* <ProductList /> */}
      </div>
    </div>
  );
};

export default Home;
