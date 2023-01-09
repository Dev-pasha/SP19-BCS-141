const mongoose = require("mongoose");
const app = require("./app");

// port number
const port = process.env.PORT || 3000;
const db = "mongodb://127.0.0.1/practice";


//  database connection
mongoose.connect(db,{ useNewUrlParser: true}).then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});



// listen to port on server
app.listen(port, () => {
  console.log(`\nServer is running on port ${port}`);
});
