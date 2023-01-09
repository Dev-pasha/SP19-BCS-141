import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// import Alert from 'react-bootstrap/Alert';


const AddProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const submihndle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/products/upload", {
        name,
        price,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{}}> Create a new Product</h1>
      <form>
        <label
          style={{
            margin: "1rem",
          }}
          htmlFor="name"
        >
          Name
        </label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name="name"
          value={name}
        />
        <label
          style={{
            margin: "1rem",
          }}
          htmlFor="price"
        >
          Price
        </label>
        <input
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="text"
          name="price"
          value={price}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "1rem",
              margin: "1rem",
              cursor: "pointer",
            }}
            onClick={submihndle}
          >
            Create Product
          </button>

          <Link to="/product">
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "1rem",
                margin: "1rem",
                cursor: "pointer",
              }}
            >
              View Products
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
