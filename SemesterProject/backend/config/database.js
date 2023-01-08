const mongoose = require('mongoose');

// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWROD
// );
// connection to database
// mongoose.set('strictQuery', true);
// mongoose.set('strictQuery', false);


exports.connectDatabase = () => {
mongoose
  .connect('mongodb+srv://abdullah321:socialHub9900@cluster0.vkas4hv.mongodb.net/socialHub?retryWrites=true&w=majority')
  .then((con) => {
    // console.log(`connected to database`);
    console.log(`db connection successfull`);
  }).catch(err =>{
       console.log(err);
    })

}









// exports.connectDatabaseLocal = () => {
//     mongoose.connect(process.env.DATABASE_LOCAL).then(con => {
//         console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
//     }).catch(err => {
//         console.log(err);
//     });
//     }


//     exports.connectDatabase = () => {  
//         mongoose.connect(process.env.DATABASE).then(con => {
//             console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
//         }).catch(err => {
//             console.log(err);
//         });
//     }
