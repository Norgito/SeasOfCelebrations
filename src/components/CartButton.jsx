import "../styles/CartButton.css";
// import CartButtonJs from "../utils/CartButtonJs";

const CartButton = () => {
//   window.onload = function () {
//     CartButtonJs();
//   };
  return (
    <div>
      <button className="button white">
        <div className="icon">
          <div className="cannon" />
          <div className="confetti">
            <svg viewBox="0 0 18 16">
              <polyline points="1 10 4 7 4 5 6 1" />
              <path d="M4,13 C5.33333333,9 7,7 9,7 C11,7 12.3340042,6 13.0020125,4" />
              <path d="M6,15 C7.83362334,13.6666667 9.83362334,12.6666667 12,12 C14.1663767,11.3333333 15.8330433,9.66666667 17,7" />
            </svg>
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <div className="emitter" />
          </div>
        </div>
        <span>Confirm</span>
      </button>
    </div>
  );
};

export default CartButton;
