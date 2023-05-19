import { useEffect } from "react";
import BannerHeader from "../components/BalloonsHeader";
import GalleryImages from "../components/GalleryImages";
import Spinner from "../utils/Spinner";
import { scrollToTop } from "../utils/ScrollToTop";


const Gallery = () => {

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <Spinner />
      <BannerHeader page="Gallery" />
      <GalleryImages />

    </div>
  );
};

export default Gallery;
