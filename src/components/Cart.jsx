import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

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
  console.log(test.cartList);

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
      .then((result) => notify(result.id))
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
      <div className="Center p-3">
        <p>SHOPPING CART</p>
      </div>
      <hr />
      {test.cartList.length > 0 &&
        test.cartList.map((prod) => (
          <div className="flex justify-center items-center gap-6 p-2 ">
            <img
              src={prod.image}
              alt="pic"
              className="w-[100px] rounded-full"
            />
            <p>{prod.name}</p>
            <p>Quantity: {prod.quantity}</p>
            <p>Price: ${prod.price}</p>
            <p>
              Sub: <FormatNumber number={prod.price * prod.quantity} />
            </p>
            <button
              onClick={() => test.removeItem(prod.id)}
              style={{ cursor: "pointer" }}
            >
              {" "}
              <DeleteIcon />
            </button>
          </div>
        ))}
      <hr />
      {test.cartList.length > 0 ? (
        <>
          <p className="text-center">FILL YOUR INFO</p>
          <form className="Center flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              required
              onChange={handleSubmitChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              required
              onChange={handleSubmitChange}
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              required
              onChange={handleSubmitChange}
            />
            <input
              type="text"
              placeholder="Address"
              name="adress"
              required
              onChange={handleSubmitChange}
            />
          </form>
          <hr />

          <p className="text-center">
            TOTAL PRICE: <FormatNumber number={test.totalPrice()} />
          </p>

          {buyer.name && buyer.adress && buyer.phone && buyer.email ? (
            <>
              <div className="text-center">
                <button>
                  <input
                    onClick={() => {
                      orderHandler();
                    }}
                    type="submit"
                    value="CHECKOUT NOW"
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ee9bff",
                      cursor: "pointer",
                    }}
                  />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <button className="">
                  <input
                    type="submit"
                    value="COMPLETE INFO"
                    disabled
                    style={{ background: "none", border: "none" }}
                  />
                </button>
              </div>
            </>
          )}
          <hr />
          <div className="text-center">
            <button onClick={() => test.clear()} style={{ cursor: "pointer" }}>
              CLEAR CART
            </button>
          </div>
        </>
      ) : (
        <>
          <img
            src="https://i.imgur.com/yQKa1Bg.png"
            width="300"
            height="auto"
            alt="empty page"
          />
          <hr />
          <hr />
          <Link to="/" style={{ textDecoration: "none" }}>
            <button style={{ cursor: "pointer" }}>← CONTINUE SHOPPING </button>
          </Link>
        </>
      )}
    </>
  );
};

export default Cart;
