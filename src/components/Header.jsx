// import React from "react";
// import NavBar from "../components/Navbar";
// import BannerGallery from "./BannerGallery";
import WaveTop from "./WaveTop";
import PageLinks from "./PageLinks";
import CartWidget from "./CartWidget";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <div>
      <MobileHeader />
      <div className=" hidden lg:block">
        <CartWidget />
      </div>
      <PageLinks />
      <WaveTop />
      {/* <NavBar />
      <BannerGallery /> */}
    </div>
  );
};

export default Header;
