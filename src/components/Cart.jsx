import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Carrito from "../assets/cart.png";
import ClearCart from "../assets/img/ClearCart.png";
import {
  collection,
  getFirestore,
  doc,
  updateDoc,
  increment,
  setDoc,
} from "firebase/firestore";
import FormatNumber from "../utils/FormatNumber";
import BalloonsHeader from "./BalloonsHeader";
// import { notify } from "../Util/Notify";
// import { ToastContainer } from "react-toastify";
// import { Zoom } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const test = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    adress: "",
    phone: "",
    email: "",
  });

  const orderDate = new Date().toLocaleDateString();

  const handleSubmitChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  function orderHandler() {
    const orders = {
      buyer,
      items: test.cartList.map((prod) => ({
        id: prod.id,
        title: prod.name,
        price: prod.price,
        quantity: prod.quantity,
      })),
      price: test.totalPrice(),
      date: orderDate,
    };

    saveToFirestore(orders);
  }

  const saveToFirestore = async (orders) => {
    const db = getFirestore();
    const createOrderFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, orders);
      return newOrderRef;
    };

    createOrderFirestore()
      //.then((result) => notify(result.id))
      .catch((e) => console.log(e));

    test.cartList.forEach(async (prod) => {
      const itemRef = doc(db, "products", prod.id);
      await updateDoc(itemRef, {
        stock: increment(-prod.quantity),
      });
    });

    test.clear();
  };

  return (
    <>
      <BalloonsHeader page="Cart" />

      {/* ITEMS */}

      <div className="AnimatedBg2 lg:container m-3 rounded-3xl">
        {test.cartList.length > 0 &&
          test.cartList.map((prod, i) => (
            <div key={i} className="  lg:p-4 p-2 rounded text-white">
              <div className=" flex justify-between pt-2 items-center relative">
                <img
                  src={prod.image}
                  alt="pic"
                  className="w-[90px] lg:w-[100px] lg:left-4 left-6 rounded-full relative shadow-1 shadow-white"
                />
                <span className="flex-col lg:flex lg:flex-row text-center w-screen text-[12px] lg:text-base lg:items-center justify-evenly bg-white/40 rounded-r-full py-1 ">
                  <p className="lg:p-4 uppercase font-bold">{prod.name}</p>

                  <p className="lg:block">Quantity: {prod.quantity}</p>
                  <p>Price: ${prod.price}</p>
                  <p>
                    Sub: <FormatNumber number={prod.price * prod.quantity} />
                  </p>
                </span>
                <button
                  onClick={() => test.removeItem(prod.id)}
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}

        {/* INFO */}
        {test.cartList.length > 0 ? (
          <div className=" p-4 rounded text-white">
            <div className="flex lg:justify-end justify-center lg:-mt-4  mb-10">
              <p className=" lg:text-base font-semibold p-2 px-3 bg-white/40 text-white rounded-full">
                TOTAL PRICE: <FormatNumber number={test.totalPrice()} />
              </p>
            </div>
            <p className="text-center text-4xl font-semibold mb-4 bg-white/30 rounded-full">
              FILL YOUR INFO
            </p>
            <form className="Center flex-col lg:flex-row m-4 text-sm gap-2 font-light p-1">
              <input
                className="p-1 rounded"
                type="text"
                placeholder="Full Name"
                name="name"
                required
                onChange={handleSubmitChange}
              />
              <input
                className="p-1 rounded"
                type="text"
                placeholder="Email"
                name="email"
                required
                onChange={handleSubmitChange}
              />
              <input
                className="p-1 rounded"
                type="text"
                placeholder="Phone"
                name="phone"
                required
                onChange={handleSubmitChange}
              />
              <input
                className="p-1 rounded"
                type="text"
                placeholder="Address"
                name="adress"
                required
                onChange={handleSubmitChange}
              />
            </form>

            {buyer.name && buyer.adress && buyer.phone && buyer.email ? (
              <>
                <hr />
                <div className="Center w-auto">
                  <button className="bg-white/40 m-2 rounded-full">
                    <input
                      onClick={() => {
                        orderHandler();
                      }}
                      type="submit"
                      value="CHECKOUT NOW"
                      style={{
                        background: "none",
                        border: "none",
                        color: "#ffffff",
                        cursor: "pointer",
                      }}
                    />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="Center text-center text-red-950">
                  <button className="">
                    <input
                      type="submit"
                      value="COMPLETE INFO TO CONTINUE"
                      disabled
                      style={{ background: "none", border: "none" }}
                    />
                  </button>
                </div>
              </>
            )}
            <hr />
            <div
              className="flex lg:justify-end justify-center items-center cursor-pointer pt-2 "
              onClick={() => test.clear()}
            >
              <img src={ClearCart} className="w-[35px]" />
              <p>CLEAR CART</p>
            </div>
          </div>
        ) : (
          <div className="Center p-6 flex-col">
            <Link to="/">
              <img
                src={Carrito}
                alt="empty page"
                className="w-[350px] react-floater-animated"
              />
              <div className="Center rounded-2xl text-white mt-2 flex-col">
                <p className="font-semibold uppercase text-[20px]">
                  Shopping Cart Empty
                </p>
                <div className="flex items-center py-2 rounded-full bg-white/50 justify-start">
                  <div className=" px-3 rounded">
                    <p> BACK HOME</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
