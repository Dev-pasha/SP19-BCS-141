const app = require('./app');
// const mongoose = require('mongoose');

// requiring db connection from config/database.js
const db = require('./backend/config/database');


// connecting to database calling function
db.connectDatabase();

// setting port from config file
const port = process.env.PORT;


// starting server and listining to the particular port coing from config file
app.listen(port, () => {
  console.log(`\nServer is up on port ${port}`);
});






//  mongoose.connect('mongodb+srv://abdullah321:socialHub9900@cluster0.vkas4hv.mongodb.net/?retryWrites=true&w=majority', ).then(con => {
//   console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
// }
// ).catch(err => {
//   console.log(err);
// }
// );