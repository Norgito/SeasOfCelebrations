import { useContext, useState, useEffect } from "react";
import { HouseContext } from "../components/HouseContext";
import Product from "../components/Product";


const ProductPageList = () => {
    const { products, loading } = useContext(HouseContext);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(products);
  }, [products]);

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
    <section className="mb-20 ">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {searchResults.map((prod, indexPageProduct) => {
            return <Product key={indexPageProduct} prod={prod} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductPageList;
