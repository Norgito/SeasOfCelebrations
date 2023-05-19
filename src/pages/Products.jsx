import { useEffect } from "react";
import Filter from "../components/Filter/Filter";
import ProductBalloons from "../components/ProductBalloons";
import ProductPageList from "../components/ProductsPageList";
import Spinner from "../utils/Spinner";
import { scrollToTop } from "../utils/ScrollToTop";

const Products = () => {

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <Spinner />
      <div className="-mt-6">
        <ProductBalloons />
        <div id="Product" className="mt-10">
          <Filter backgroundColor="Filter FProd" buttonClass="button-prod" />
        </div>
      </div>
      <ProductPageList />
    </div>
  );
};

export default Products;
