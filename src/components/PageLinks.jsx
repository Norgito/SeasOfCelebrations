import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo/LogoClean.png";
import "animate.css";
import { Fade } from "react-awesome-reveal";

const PageLinks = () => {
  return (
    <div className="relative Center z-10 hidden lg:block" >
      <div className="absolute top-3 w-full text-center ">
        <div className="flex justify-center items-center uppercase font-bold  ">
          <div className="bg-white/90 shadow-1 shadow-white rounded-l-full left-0.5 relative">
            <ul className="flex justify-center items-center px-12 py-2 gap-20 filter  AnimatedBg">
              <li
                style={{ cursor: "pointer" }}
                className="duration-100 transition-all ease-in-out"
              >
                <Fade delay={500} cascade damping={0.2}>
                  <Link to="/">Home</Link>
                </Fade>
              </li>
              <li
                style={{ cursor: "pointer" }}
                className="duration-100 transition-all ease-in-out"
              >
                <Fade delay={700} cascade damping={0.2}>
                  <Link to="/Services">Services</Link>
                </Fade>
              </li>
              <li
                style={{ cursor: "pointer" }}
                className="duration-100 transition-all ease-in-out"
              >
                <Fade delay={900} cascade damping={0.2}>
                  <Link to="/Rent">Rent</Link>
                </Fade>
              </li>
            </ul>
          </div>

          <div className="bg-white/80 shadow-1 shadow-white Center rounded-full h-[400px] w-[400px] ">
            <img
              src={Logo}
              alt="Logo"
              className=" mx-auto animate__animated animate__zoomIn animate__slower"
            />
          </div>
          <div className="bg-white/90 shadow-1 shadow-white rounded-r-full relative right-0.5">
            <ul className=" tracking-tight flex justify-center items-center px-8 py-2 gap-16  filter  AnimatedBg">
              <li
                style={{ cursor: "pointer" }}
                className="duration-100 transition-all ease-in-out"
              >
                <Fade delay={1100} cascade damping={0.2}>
                  <Link to="/Products">Products</Link>
                </Fade>
              </li>
              <li
                style={{ cursor: "pointer" }}
                className="duration-100 transition-all ease-in-out"
              >
                <Fade delay={1200} cascade damping={0.2}>
                  <Link to="/Gallery">Gallery</Link>
                </Fade>
              </li>
              <li
                style={{ cursor: "pointer" }}
                className="duration-100 transition-all ease-in-out"
              >
                <Fade delay={1300} cascade damping={0.2}>
                  <Link to="/Contact">Contact</Link>
                </Fade>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLinks;
