import { useContext, useState, useEffect } from "react";
import { HouseContext } from "./HouseContext";
import Product from "./Product";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "../index.css";

const ProductList = () => {
  const { products, loading } = useContext(HouseContext);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
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
    <section className="containerHome">
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {searchResults.map((prod, indexProd) => (
            <SwiperSlide key={indexProd}>
              <div className="">
                <Product prod={prod} />
              </div>
            </SwiperSlide>
          ))}
          <div
            data-aos="zoom-in-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            className="slider-controler z-50 "
          >
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow ">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination "></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ProductList;
