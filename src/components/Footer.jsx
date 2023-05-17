import "../styles/Footer.css";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
// import InstagramIcon from "../utils/Icons/InstagramIcon"
// import WhatsappIcon from "../utils/Icons/WhatsappIcon"

const Footer = () => {
  return (
    <div>
      <footer className="footer AnimatedBg2 shadow-lg shadow-slate-700 p-5">
        <div className="iconsF Center">
          <a href="#" className="iconF icon--instagram">
            <i className="ri-instagram-line" />
          </a>
          <a href="#" className="iconF icon--twitter">
            <i className="ri-tiktok-fill" />
          </a>
          <a href="#" className="iconF icon--linkedin">
            <i className="ri-facebook-fill" />
          </a>
          <a href="#" className="iconF icon--github">
            <i className="ri-whatsapp-line" />
          </a>
        </div>

        <ul className="list text-white lg:text-lg">
          <li>
            <Fade delay={500} cascade damping={0.2}>
              <Link to="/">Home</Link>
            </Fade>
          </li>
          <li>
            <Fade delay={700} cascade damping={0.2}>
              <Link to="/Services">Services</Link>
            </Fade>
          </li>
          <li>
            <Fade delay={900} cascade damping={0.2}>
              <Link to="/Rent">Rent</Link>
            </Fade>
          </li>
          <li>
            <Fade delay={1100} cascade damping={0.2}>
              <Link to="/Products">Products</Link>
            </Fade>
          </li>
          <li>
            <Fade delay={1200} cascade damping={0.2}>
              <Link to="/Gallery">Gallery</Link>
            </Fade>
          </li>
          <li>
            <Fade delay={1300} cascade damping={0.2}>
              <Link to="/Contact">Contact</Link>
            </Fade>
          </li>
        </ul>
        <p className="copyright text-white -mb-3">
          {" "}
          Copyright &copy; 2023. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
