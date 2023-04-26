import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";

const WhatsappIcon = () => {
  const tiktokRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: tiktokRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://raw.githubusercontent.com/Norgito/vite-realstate-d/master/src/assets/img/SocialIcons/whatsapp2.json",
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
      <div ref={tiktokRef} className="w-[70px]"></div>
    </Link>
  );
};

export default WhatsappIcon;