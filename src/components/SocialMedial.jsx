import { Link } from "react-router-dom";
import Tik from "../assets/img/SocialMedia/inst.png";
import Inst from "../assets/img/SocialMedia/inst.png";
import Face from "../assets/img/SocialMedia/inst.png";
import Wapp from "../assets/img/SocialMedia/inst.png";

const SocialMedia = () => {
  return (
    <div>
      <div className="lg:flex items-center gap-x-2 -mb-2 hidden">
        <img src={Wapp} className="w-8" />
        <a
          href="tel:+2975938082"
          className="text-[16px] w-[110px] flex justify-center text-black font-medium -ml-2 tracking-tighter hover:font-bold hover:scale-105"
        >
          +297 593 8082
        </a>
        <Link
          to="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Inst} className="w-9 cursor-pointer" />
        </Link>
        <Link
          to="https://www.facebook.com/SunCaribbeanRealty/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Face} className="w-8 cursor-pointer" />
        </Link>
        <Link
          to="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Tik} className="w-[38px] cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
