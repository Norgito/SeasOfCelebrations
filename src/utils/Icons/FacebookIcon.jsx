import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";

const FacebookIcon = () => {
  const facebookRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: facebookRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://raw.githubusercontent.com/Norgito/vite-realstate-d/master/src/assets/img/SocialIcons/facebook2.json",
    });
    animation.setSpeed(0.2);
    return () => {
      animation.stop();
      animation.destroy();
    };
  }, []);

  return (
    <Link
      to="https://www.facebook.com/SunCaribbeanRealty/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div ref={facebookRef} className="w-[70px]"></div>
    </Link>
  );
};

export default FacebookIcon;