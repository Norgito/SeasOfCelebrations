// import gsap from "gsap";

// const CartButtonJs = () => {
//   gsap.registerPlugin(Physics2DPlugin);

//   Array.from(document.querySelectorAll(".button")).forEach((button) => {
//     const {
//       top: boundingTop,
//       left: boundingLeft,
//       width: boundingWidth,
//       height: boundingHeight,
//     } = button.getBoundingClientRect();

//     button.addEventListener("mousemove", ({ clientX, clientY }) => {
//       let dy = (clientY - boundingTop - boundingHeight / 2) / -1;
//       let dx = (clientX - boundingLeft - boundingWidth / 2) / 10;

//       dy = dy > 10 ? 10 : dy < -10 ? -10 : dy;
//       dx = dx > 4 ? 4 : dx < -4 ? -4 : dx;

//       button.style.setProperty("--rx", dy);
//       button.style.setProperty("--ry", dx);
//     });

//     button.addEventListener("mouseleave", () => {
//       button.style.setProperty("--rx", 0);
//       button.style.setProperty("--ry", 0);
//     });

//     button.addEventListener("click", () => {
//       button.classList.add("success");
//       gsap.to(button, {
//         "--icon-x": -3,
//         "--icon-y": 3,
//         "--z-before": 0,
//         duration: 0.2,
//         onComplete() {
//           particles(button.querySelector(".emitter"), 100, -4, 6, -80, -50);
//           gsap.to(button, {
//             "--icon-x": 0,
//             "--icon-y": 0,
//             "--z-before": -6,
//             duration: 1,
//             ease: "elastic.out(1, .5)",
//             onComplete() {
//               button.classList.remove("success");
//             },
//           });
//         },
//       });
//     });
//   });

//   function particles(parent, quantity, x, y, minAngle, maxAngle) {
//     const colors = ["#FFFF04", "#EA4C89", "#892AB8", "#4AF2FD"];
//     for (let i = quantity - 1; i >= 0; i--) {
//       const angle = gsap.utils.random(minAngle, maxAngle);
//       const velocity = gsap.utils.random(70, 140);
//       const dot = document.createElement("div");
//       dot.style.setProperty("--b", colors[Math.floor(gsap.utils.random(0, 4))]);
//       parent.appendChild(dot);
//       gsap.set(dot, {
//         opacity: 0,
//         x,
//         y,
//         scale: gsap.utils.random(0.4, 0.7),
//       });
//       gsap
//         .timeline({
//           onComplete() {
//             dot.remove();
//           },
//         })
//         .to(
//           dot,
//           {
//             duration: 0.05,
//             opacity: 1,
//           },
//           0
//         )
//         .to(
//           dot,
//           {
//             duration: 1.8,
//             rotationX: `-=${gsap.utils.random(720, 1440)}`,
//             rotationZ: `+=${gsap.utils.random(720, 1440)}`,
//             physics2D: {
//               angle: angle,
//               velocity: velocity,
//               gravity: 120,
//             },
//           },
//           0
//         )
//         .to(
//           dot,
//           {
//             duration: 1,
//             opacity: 0,
//           },
//           0.8
//         );
//     }
//   }
// };

// export default CartButtonJs;
