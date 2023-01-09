const express = require("express");
const bodyParser = require("body-parser");
app = express();


// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));




// api calls
// app.use("/api/v1",user);
// app.use("/api/v1",product);


app.get('/', (req, res)=>{
    res.status(200).json({
        message: "Welcome to my API"
    })
    

})


app.get('/api/v1', (req, res)=>{
  
    res.status(200).json({
        message: "Welcome to my API"
    })
    

})






module.exports = app;