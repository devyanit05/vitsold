import { Routes, Route } from "react-router-dom";

import Navbar from "./components/header/Navbar";
import CatNav from "./components/catNav/CatNav";
import Main from "./components/home/Main";
import Footer from "./components/footer/Footer";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Cart from "./components/cart/Cart";
import BuyNow from "./components/buynow/BuyNow";
import Help from "./components/help/Help";
import SellProducts from "./components/sell/SellProducts";
import AllProducts from "./components/displayCat/AllProducts";
import Electronics from "./components/displayCat/Electronics";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <CatNav />
      <Routes>
        <Route exact path="/" element={<Main />} />

        <Route exact path="/getproductsone/:id" element={<BuyNow />} />
        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/login" element={<Signin />} />
        <Route exact path="/register" element={<Signup />} />

        <Route exact path="/help" element={<Help />} />

        <Route exact path="/sell" element={<SellProducts />} />

        <Route exact path="/all-products" element={<AllProducts />} />
        <Route exact path="/category/:cat" element={<Electronics />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
