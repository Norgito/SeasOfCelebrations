import { useEffect, useRef } from "react";
import Filter from "../components/Filter/Filter";
import RentPageList from "../components/RentPageList";

const Rent = () => {
  const filterRef = useRef(null);

  useEffect(() => {
    filterRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      <div ref={filterRef}>
        <Filter />
      </div>
      <RentPageList />
    </div>
  );
};

export default Rent;
