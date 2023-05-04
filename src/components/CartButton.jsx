import "../styles/CartButton.css";
import confetti from "https://esm.run/canvas-confetti@1";
import { useEffect } from "react";

const CartButton = () => {
  useEffect(() => {
    document.querySelectorAll(".button").forEach((button) =>
      button.addEventListener("click", (e) => {
        if (!button.classList.contains("loading")) {
          button.classList.add("loading");
          setTimeout(() => button.classList.remove("loading"), 3700);
        }
        e.preventDefault();
      })
    );
  }, []);

  function onClick() {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
  }

  return (
    <button className="button bg-white/30  rounded-full text-white Center" onClick={onClick}>
      <span>ADD TO CART</span>
      <div className="cart">
        <svg viewBox="0 0 36 26">
          <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5" />
          <polyline points="15 13.5 17 15.5 22 10.5" />
        </svg>
      </div>
    </button>
  );
};

export default CartButton;
