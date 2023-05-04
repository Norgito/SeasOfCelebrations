import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Balloon from "../assets/Bcart.png";

import {
  collection,
  getFirestore,
  doc,
  updateDoc,
  increment,
  setDoc,
} from "firebase/firestore";

import FormatNumber from "../utils/FormatNumber";
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
      {/* TEXT */}
      <div className="Center font-bold text-3xl pb-6">
        <div className="text-[40px] font-secondary text-center Center flex-col react-floater-animated ">
          <img src={Balloon} className="w-[120px] mr-[445px] absolute" />
          <img src={Balloon} className="w-[120px] ml-[445px] absolute" />
          <div className="z-20 Center ">
            <p className="text-white AnimatedBg2 shadow-lg rounded-full w-[500px] mt-[160px] py-2">
              Request Quotation
            </p>
          </div>
        </div>
      </div>

      {/* ITEMS */}
      <div className="AnimatedBg2 container w-screen rounded-2xl">
        {test.cartList.length > 0 &&
          test.cartList.map((prod, i) => (
            <div key={i} className="  p-4 rounded text-white">
              <div className=" flex justify-between items-center relative  ">
                <img
                  src={prod.image}
                  alt="pic"
                  className="w-[100px] left-4 rounded-full relative bg-white shadow-1 shadow-white"
                />
                <span className="flex w-screen justify-evenly bg-white/40 rounded-r-full py-6">
                  <p>{prod.name}</p>
                  <p className="lg:block hidden">Quantity: {prod.quantity}</p>
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
            <div className="flex justify-end -mt-4 mb-10">
              <p className=" text-xl font-light p-2 px-3 bg-white/40 text-white rounded-full">
                TOTAL PRICE: <FormatNumber number={test.totalPrice()} />
              </p>
            </div>
            <p className="text-center text-4xl font-semibold mb-4 bg-white/30 rounded-full">
              FILL YOUR INFO
            </p>
            <form className="Center flex gap-3 m-4 text-base font-light p-1">
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
              className="flex justify-end items-center cursor-pointer pt-2 "
              onClick={() => test.clear()}
            >
              <img src="https://i.imgur.com/lMNS4MN.png" className="w-[35px]" />
              <p>CLEAR CART</p>
            </div>
          </div>
        ) : (
          <div className="Center p-6">
            <Link to="/">
              <img
                src="https://i.imgur.com/oGLVZoz.png"
                height="auto"
                alt="empty page"
              />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
