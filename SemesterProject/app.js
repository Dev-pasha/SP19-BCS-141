const express = require("express");

// cors is used to allow cross origin resource sharing
// const cors = require("cors");

// body parser is used to parse the body of the request and make it available in req.body in json object 
const bodyParser = require("body-parser");
// cookie parser is used to parse the cookies and make it available in req.cookies
const cookieParser = require("cookie-parser");
// app is the instance of express
const app = express();
require("dotenv").config({path: "backend/config/config.env"});
// const controller=require('./backend/controllers/userController');



// importing routes
const post = require("./backend/routes/postRoutes");
const user = require("./backend/routes/userRoutes");
// const { json } = require("body-parser");

// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({ path: "backend/config/config.env" });
// }

// using middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(cors);



// using routes
app.use("/api/v1", post);
app.use("/api/v1", user);


// app.post("/api/v1/check", (req, res) => {
//   res.send("Hello World");
// });
module.exports = app;
