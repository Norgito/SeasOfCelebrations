import React from "react";
import PageServicesList from "../components/PageServicesList";
import Filter from "../components/Filter/Filter";

const Services = () => {
  return (
    <div>
      <Filter />
      <PageServicesList />
    </div>
  );
};

export default Services;
