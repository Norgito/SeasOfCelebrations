import React from "react";
import "../styles/confetti.css";

export const Confetti = () => {
  const confettiShower = [];
  const numConfettis = 0;
  const colors = ["#f2abe7", "#9fa3ec", "#86d2e1 ", "#fec31e "];
  const confettiContainer = React.useRef(null);

  class Confetti {
    constructor(x, y, w, h, c) {
      this.w = Math.floor(Math.random() * 10 + 5);
      this.h = this.w * 1;
      this.x = Math.floor(Math.random() * 100);
      this.y = Math.floor(Math.random() * 100);
      this.c = colors[Math.floor(Math.random() * colors.length)];
      this.container = confettiContainer.current;
    }

    create() {
      var newConfetti =
        '<div class="confetti" style="bottom:' +
        this.y +
        "%; left:" +
        this.x +
        "%;width:" +
        this.w +
        "px; height:" +
        this.h +
        'px;"><div class="rotate"><div class="askew" style="background-color:' +
        this.c +
        '"></div></div></div>';
      this.container.innerHTML += newConfetti;
    }
  }

  function animateConfetti() {
    for (var i = 1; i <= numConfettis; i++) {
      var confetti = new Confetti();
      confetti.create();
    }
    var confettis = document.querySelectorAll(".confetti");
    for (var y = 0; y < confettis.length; y++) {
      var opacity = Math.random() + 0.1;
      var animated = confettis[y].animate(
        [
          { transform: "translate3d(0,0,0)", opacity: opacity },
          { transform: "translate3d(20vw,100vh,0)", opacity: 1 },
        ],
        {
          duration: Math.random() * 3000 + 3000,
          iterations: Infinity,
          delay: -(Math.random() * 5000),
        }
      );
      confettiShower.push(animated);
    }
  }

  React.useEffect(() => {
    animateConfetti();
  }, []);

  return (
    <div
      ref={confettiContainer}
      style={{ display: "flex", flexDirection: "column" }}
    ></div>
  );
};
