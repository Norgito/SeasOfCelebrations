import PageServicesList from "../components/PageServicesList";
import Filter from "../components/Filter/Filter";
import ServiceBalloons from "../components/ServiceBalloons";

const Services = () => {
  return (
    <div>
      <div className="-mt-6">
        <ServiceBalloons />
        <div className="mt-10">
          <Filter backgroundColor="Filter FSer" />
        </div>
      </div>
      <PageServicesList />
    </div>
  );
};

export default Services;
