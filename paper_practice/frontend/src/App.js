import "./App.css";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/home";
import Product from "./Components/Products/Product";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./Components/Category/Category";
import About from "./Components/About/About";
import ContactUs from "./Components/Contact Us/ContactUs";
import AddProduct from "./Components/Products/AddProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-product" element={<AddProduct />} />


          <Route
            path="*"
            element={
              <>
                <h1>404 not found</h1>
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// <Register />
// {/* <Login /> */}
// <Footer />
