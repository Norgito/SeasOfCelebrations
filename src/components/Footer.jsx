import "../styles/Footer.css";
import { Link } from "react-router-dom";
// import InstagramIcon from "../utils/Icons/InstagramIcon"
// import WhatsappIcon from "../utils/Icons/WhatsappIcon"

const Footer = () => {
  return (
    <div>
      <footer className="footer AnimatedBg2  p-5 mt-20">
        <div className="iconsF Center mb-5">
          <a
            href="#"
            className="iconF icon--instagram"
            aria-label="Link to Instagram"
          >
            <i className="ri-instagram-line" />
          </a>
          <a
            href="#"
            className="iconF icon--twitter"
            aria-label="Link to Facebook"
          >
            <i className="ri-tiktok-fill" />
          </a>
          <a
            href="#"
            className="iconF icon--linkedin"
            aria-label="Link to Tiktok"
          >
            <i className="ri-facebook-fill" />
          </a>
          <a
            href="#"
            className="iconF icon--github"
            aria-label="Link to whatsapp"
          >
            <i className="ri-whatsapp-line" />
          </a>
        </div>

        <ul className="list text-white lg:text-lg">
          <li className="hover:border-b hover:shadow-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:border-b hover:shadow-lg">
            <Link to="/Services">Services</Link>
          </li>
          <li className="hover:border-b hover:shadow-lg">
            <Link to="/Rent">Rent</Link>
          </li>
          <li className="hover:border-b hover:shadow-lg">
            <Link to="/Products">Products</Link>
          </li>
          <li className="hover:border-b hover:shadow-lg">
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li className="hover:border-b hover:shadow-lg">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <p className="copyright text-white -mb-3 mt-5">
          {" "}
          Copyright &copy; 2023. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
