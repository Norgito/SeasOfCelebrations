import Filter from "../components/Filter/Filter";
import ProductBalloons from "../components/ProductBalloons";
import ProductPageList from "../components/ProductsPageList";

const Products = () => {
  return (
    <div>
      <div className="-mt-6">
        <ProductBalloons />
        <div className="mt-10">
          <Filter backgroundColor="Filter FProd" />
        </div>
      </div>
      <ProductPageList />
    </div>
  );
};

export default Products;
