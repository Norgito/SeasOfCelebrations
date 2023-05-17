import  { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";

const InstagramIcon = () => {
  const instagramRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: instagramRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://raw.githubusercontent.com/Norgito/vite-realstate-d/master/src/assets/img/SocialIcons/instagram2.json",
    });
    animation.setSpeed(0.1);
    return () => {
      animation.stop();
      animation.destroy();
    };
  }, []);

  return (
    <Link
      to="https://www.instagram.com/seasofcelebrations/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div ref={instagramRef} className="w-[70px] z-50 "></div>
    </Link>
  );
};

export default InstagramIcon;