// import React from "react";
// import NavBar from "../components/Navbar";
// import BannerGallery from "./BannerGallery";
import WaveTop from "./WaveTop";
import PageLinks from "./PageLinks";
import CartWidget from "./CartWidget";

const Header = () => {
  return (
    <div>
      <CartWidget />
      <PageLinks />
      <WaveTop />
      {/* <NavBar />
      <BannerGallery /> */}
    </div>
  );
};

export default Header;
