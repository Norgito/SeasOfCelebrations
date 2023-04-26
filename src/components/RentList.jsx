import React, { useContext, useState, useEffect } from "react";
import { HouseContext } from "./HouseContext";
import Rent from "./Rent";

const RentList = () => {
  const { rents, loading } = useContext(HouseContext);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(rents);
  }, [rents]);

  if (loading) {
    return null;
  }

  if (searchResults.length === 0) {
    return (
      <p className="text-center mt-16 lg:mt-28 text-2xl text-gray-400">
        Sorry, nothing found 🔍
      </p>
    );
  }

  return (
    <section className="mb-5 ">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {searchResults.map((rent, indexRent) => {
            return (
              <Rent key={indexRent} rent={rent} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RentList;
