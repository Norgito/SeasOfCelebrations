import PageServicesList from "../components/PageServicesList";
import Filter from "../components/Filter/Filter";
import ServiceBalloons from "../components/ServiceBalloons";

const Services = () => {
  return (
    <div>
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
