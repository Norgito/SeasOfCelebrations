
import { Route, Routes } from "react-router-dom";
import "./App.css";

import {
  Home,
  Products,
  Gallery,
  Contact,
  NotFound,
  Rent,
  Services,
  Cart
} from "./utils/PageIndex";
import Header from "./components/Header";
import Footer from "../src/components/Footer";
import "./index.css";

function App () {
  return (
    <div className="App">
      <div className="max-w[1440px] mx-auto bg-white">
        <Header />
        <Routes>
          <Route key="Home" path="/" element={<Home />} />
          <Route key="Products" path="/Products" element={<Products />} />
          <Route key="Gallery" path="/Gallery" element={<Gallery />} />
          <Route key="Contact" path="/Contact" element={<Contact />} />
          <Route key="Rent" path="/Rent" element={<Rent />} />
          <Route key="Services" path="/Services" element={<Services />} />
          <Route key="Cart" path="/Cart" element={<Cart />} />
          <Route key="NotFound" path="/NotFound" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
