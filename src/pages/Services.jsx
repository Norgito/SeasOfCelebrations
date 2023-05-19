import { useEffect } from "react";
import PageServicesList from "../components/PageServicesList";
import Filter from "../components/Filter/Filter";
import ServiceBalloons from "../components/ServiceBalloons";
import Spinner from "../utils/Spinner";
import { scrollToTop } from "../utils/ScrollToTop";

const Services = () => {

  useEffect(() => {
    scrollToTop();
  }, []);
  
  return (
    <div>
      <Spinner />
      <div className="-mt-6">
        <ServiceBalloons />
        <div id="Service" className="mt-10">
          <Filter backgroundColor="Filter FSer" buttonClass="button-serv" />
        </div>
      </div>
      <PageServicesList />
    </div>
  );
};

export default Services;
