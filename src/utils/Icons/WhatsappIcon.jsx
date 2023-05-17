import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const WhatsappIcon = () => {
  const wapp = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: wapp.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://raw.githubusercontent.com/Norgito/vite-realstate-d/master/src/assets/img/SocialIcons/whatsapp2.json",
    });
    animation.setSpeed(0.1);
    return () => {
      animation.stop();
      animation.destroy();
    };
  }, []);

  return (
    <a
      href="https://wa.me/+542212229368"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div ref={wapp} className="w-[70px] z-50 fixed bottom-2 left-2"></div>
    </a>
  );
};

export default WhatsappIcon;
