import { useContext, useState, useEffect } from "react";
import { HouseContext } from "../components/HouseContext";
import House from "../components/House";
import "../styles/Wrap.css";

const HouseList = () => {
  const { items, loading } = useContext(HouseContext);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(items);
  }, [items]);

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
          {searchResults.map((item, House) => {
            return <House house={item} key={House} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
