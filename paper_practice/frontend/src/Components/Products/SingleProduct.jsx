import React from "react";
import axios from "axios";
// import {Alert , Snackbar, Button} from "@mui/material";
// import Snackbar from '@mui/material/Snackbar';
// import Product from "./Product";
import Alert from 'react-bootstrap/Alert';


const SingleProduct = ({ product }) => {
  const handldelte = (e) => {
    axios
      .delete(`http://localhost:4000/api/products/${product._id}`)
      .then((res) => {
        alert("Product Deleted");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   // handldelte();
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "15vh",
        padding: "1rem 5rem",

        border: "1px solid black",

        // border: "1px solid black",
      }}
    >
      <h1
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          color: "black",
          textTransform: "uppercase",
        }}
      >
        {product.name}
      </h1>
      <h2
        style={{
          fontSize: "0.8rem",
          //   fontWeight: "bold",
          color: "black",
          textTransform: "uppercase",
        }}
      >
        {product.price}
      </h2>
      <Alert variant="success">
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "0.5rem",
          width: "10rem",
          cursor: "pointer",
        }}
        onClick={handldelte}
      >
        Delete Product
      {/* <Alert.Heading></Alert.Heading> */}
      </button>
      </Alert>
    </div>
  );
};

export default SingleProduct;
