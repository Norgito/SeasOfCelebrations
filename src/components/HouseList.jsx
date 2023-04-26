import React, { useContext, useState, useEffect } from "react";
import { HouseContext } from "../components/HouseContext";
import House from "../components/House";
import "../styles/Wrap.css"

const HouseList = () => {
  const { items, loading } = useContext(HouseContext);
  const [searchResults, setSearchResults] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const itemsToShow = 4;

  useEffect(() => {
    setSearchResults(items.slice(startIndex, endIndex + 1));
  }, [startIndex, endIndex]);

  useEffect(() => {
    setSearchResults(items.slice(startIndex, endIndex + 1));
  }, [items, startIndex, endIndex]);

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

  const handlePrevClick = () => {
    setStartIndex(Math.max(startIndex - itemsToShow, 0));
    setEndIndex(Math.max(endIndex - itemsToShow, itemsToShow - 1));
  };

  const handleNextClick = () => {
    setStartIndex(Math.min(startIndex + itemsToShow, items.length - 1));
    setEndIndex(
      Math.min(endIndex + itemsToShow, items.length - 1 + itemsToShow)
    );
  };

  return (
    <section className="mb-5">
      <div className="container mx-auto">
        <div className="gallery">
          <button
            className="gallery-control gallery-control--prev"
            onClick={handlePrevClick}
            disabled={startIndex === 0}
          >
            &#10094;
          </button>
          <div className="gallery-items gap-x-4">
            {loading ? (
              <div>Loading...</div>
            ) : (
              searchResults.map((item, index) => (
                <House house={item} key={index} />
              ))
            )}
          </div>
          <button
            className="gallery-control gallery-control--next"
            onClick={handleNextClick}
            disabled={endIndex === items.length - 1}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HouseList;
