import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import ListProducts from "./components/products";
import Cart from "./components/cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./components/product";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<ListProducts />} />
        <Route path="/product/:uId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AddProduct />} />
      </Routes>
      
    </div>
  );
}

export default App;
