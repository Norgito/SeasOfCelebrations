import "../styles/Banner.css";
import "../index.css";
import Logo from "../assets/img/Logo/SeasLOGO.png";
// import BannerText from "./BannerText";

const Banner = () => {
  return (
    <div className="flex justify-center items-center gap-52 bg-white rounded-full w-[600px] h-[600px]">
      <img src={Logo} className="w-[700px] ml-10" />
    </div>
  );
};

export default Banner;
