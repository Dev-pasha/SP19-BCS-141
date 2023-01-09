import React from "react";
import SingleProduct from "./SingleProduct";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";


const Product = () => {
  console.log("Product.jsx");
  const [products, setProducts] = React.useState([]);

  const getData = () => {
    axios
      .get("http://localhost:4000/api/products")
      .then((res) => {
        setProducts(res.data);
        // console.log(res.data);/
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      height: "100vh",
      alignItems: "center",
      justifyContent: "space-around",
      // backgroundColor:'red'
    }}>
    <div>
        <Link to="/add-product" style={{
          textDecoration: "none",
          color: "white",
          fontSize: "1rem",
          padding: "1rem",
          backgroundColor: "black",
        }} >Add Product</Link>
      </div>
    
        
      <div style={{
        // backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        overflow: "scroll",
        height: "60vh"
      }}>
      {products.length > 0 ? (
        products.map((product, index) => (
          <SingleProduct key={index} product={product} />
        ))
      ) : (
        <h2>There are no products</h2>
      )}
    </div>
    
    </div>
   
  );
};

export default Product;
