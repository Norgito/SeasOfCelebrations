import React, { useEffect } from "react";
import { Confetti } from "../utils/Confetti";
import ServiceList from "../components/ServiceList";
import BoxInfo from "../components/BoxInfo";
import ProductList from "../components/ProductList";
import RentList from "../components/RentList";
import "../index.css";
import RentBalloons from "../components/RentBalloons";
import ProductBalloons from "../components/ProductBalloons";
import ServiceBalloons from "../components/ServiceBalloons";
import { Fade } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
import Spinner from "../utils/Spinner";
import { scrollToTop } from "../utils/ScrollToTop";

const Home = React.memo(() => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    scrollToTop();
  }, []);

 
  return (
    <>
      <Spinner />
      <div className="rounded-lg ">
        <div className="z-10">
          <Confetti />
        </div>
        <div className="hidden container mt-12 px-4 lg:flex flex-col justify-center items-center">
          <p className="AnimatedBg text-[35px] md:text-[60px] lg:text-[70px]  font-secondary filter drop-shadow-md ">
            <Fade delay={500} cascade damping={0.06}>
              Your Home for
            </Fade>
          </p>
          <br />
          <p className="AnimatedBg text-[35px] md:text-[60px] lg:text-[70px] -mt-10  font-secondary filter drop-shadow-md px-3 ">
            <Fade delay={1700} cascade damping={0.06}>
              Party Supplies & Rentals!
            </Fade>
          </p>
        </div>
        <div className="mt-6">
          <BoxInfo />
        </div>
        <div className="-mt-[50px]">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <ServiceBalloons />
          </div>
          <ServiceList />
          <div
            className="-mt-[50px]"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <RentBalloons />
          </div>
          <RentList />
          <div
            className="-mt-[50px]"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <ProductBalloons />
          </div>
          <ProductList />
        </div>
      </div>
    </>
  );
});

Home.displayName = 'Home';

export default Home;
