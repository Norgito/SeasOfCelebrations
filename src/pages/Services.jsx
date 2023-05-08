import PageServicesList from "../components/PageServicesList";
import Filter from "../components/Filter/Filter";

const Services = () => {
  return (
    <div>
      <Filter />
      <div className="">
      <PageServicesList />
      </div>
    </div>
  );
};

export default Services;
