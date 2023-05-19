import "../styles/Contact.css";
import { useEffect } from "react";
import BalloonsHeader from "../components/BalloonsHeader";
import Spinner from "../utils/Spinner";
import { scrollToTop } from "../utils/ScrollToTop";

const Contact = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Spinner />

      <div className="Center -mt-6 flex-col mb-20">
        <BalloonsHeader page="Contact" />
        <div className="form p-4 lg:p-0 ">
          <div className="contact-info rounded-t-3xl">
            <h3 className="title">Lets get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>
            <div className="info">
              <div className="information">
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <p>123-456-789</p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="#">
                  <i className="far fa-envelope"></i>
                </a>
              </div>
              <br />
            </div>
          </div>

          <div className="contact-form AnimatedBg2 rounded-b-3xl lg:rounded-none">
            <span className="circle one" />
            <span className="circle two" />
            <form action="index.html" autoComplete="off">
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="input placeholder-gray-200/70"
                  placeholder="Name"
                />
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="input placeholder-gray-200/70"
                  placeholder="Email"
                />
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  className="input placeholder-gray-200/70"
                  placeholder="Phone"
                />
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input placeholder-gray-200/70"
                  placeholder="Message"
                />
              </div>
              <input type="submit" defaultValue="Send" className="btn" />
            </form>
          </div>
        </div>
        <br />
        <div className="lg:mt-2 rounded-2xl z-10">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=Roatán,+Honduras&key=AIzaSyD42hLJEwWq5z4ytCeQXxNNUCW7cYKmLws"
            className="lg:w-[1000px] w-[400px]"
            height={250}
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;

{
  /*
      <section className="map_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="map_inner">
                <h4>Find Us on Google Map</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quo beatae quasi assumenda, expedita aliquam minima
                  tenetur maiores neque incidunt repellat aut voluptas hic
                  dolorem sequi ab porro, quia error.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section> */
}
