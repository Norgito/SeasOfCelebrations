import { useEffect } from "react";
import Filter from "../components/Filter/Filter";
import RentPageList from "../components/RentPageList";
import RentBalloons from "../components/RentBalloons";
import Spinner from "../utils/Spinner";
import { scrollToTop } from "../utils/ScrollToTop";

const Rent = () => {
  
  useEffect(() => {
    scrollToTop();
  }, []);
  
  return (
    <div>
      <Spinner />
      <div className="-mt-6">
        <RentBalloons />
        <div id="Rent" className="mt-10">
          <Filter backgroundColor="Filter FRent" buttonClass="button-rent" />
        </div>
      </div>
      <RentPageList />
    </div>
  );
};

export default Rent;
