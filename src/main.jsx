import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import HouseContextProvider from "./components/HouseContext";
import CartContextProvider from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HouseContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </HouseContextProvider>
);
