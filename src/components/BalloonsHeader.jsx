import PropTypes from "prop-types";
// import Balloon from "../assets/Bcart.png";

const BalloonsHeader = ({ page }) => {
  let text = "";

  if (page === "Contact") {
    text = "Contact Us";
  } else if (page === "Cart") {
    text = "Request Quotation";
  } else if (page === "Gallery") {
    text = "Gallery";
  }

  return (
    <div>
      <div className="text-[40px] font-secondary text-center Center flex-col react-floater-animated mb-10">
        {/* <img src={Balloon} className="w-[120px] lg:mr-[345px] absolute" />
        <img
          src={Balloon}
          className="w-[120px] lg:ml-[345px] absolute hidden lg:block"
        /> */}
        <div className="z-20 Center">
          <p className="text-white AnimatedBg2 shadow-lg rounded-full md:w-[400px] w-[350px] mt-[160px] h-auto">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

BalloonsHeader.propTypes = {
  page: PropTypes.oneOf(["Contact", "Cart", "Gallery"]).isRequired,
};

export default BalloonsHeader;
