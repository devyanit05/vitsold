import { Routes, Route } from "react-router-dom";

import Navbar from "./components/header/Navbar";
import CatNav from "./components/catNav/CatNav";
import Main from "./components/home/Main";
import Footer from "./components/footer/Footer";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import SingleProduct from "./components/cart/SingleProduct";
import Cart from "./components/buynow/Cart";
import Help from "./components/help/Help";
import SellProducts from "./components/sell/SellProducts";
import AllProducts from "./components/displayCat/AllProducts";
import Electronics from "./components/displayCat/Electronics";
import AllResults from "./components/search/allResults";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <CatNav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/search" element={<AllResults />} />

        <Route exact path="/product/:id" element={<SingleProduct />} />
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
