import Filter from "../components/Filter/Filter";
import RentPageList from "../components/RentPageList";
import RentBalloons from "../components/RentBalloons";

const Rent = () => {
  return (
    <div>
      <div className="-mt-6">
        <RentBalloons />
        <div className="mt-10">
          <Filter backgroundColor="Filter FRent" />
        </div>
      </div>
      <RentPageList />
    </div>
  );
};

export default Rent;
