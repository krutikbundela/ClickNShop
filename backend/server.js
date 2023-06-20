const app = require("./app");
const { connectDatabase } = require("./config/databse");
const cloudinary = require("cloudinary");




// Handling Uncaught Exception
//console.log(youtube) lakisu to uncought error aavse
//savv thi uppr lakhiyu coz niiche ...aagar aavu kai lakhiyu to handle thai jsse
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });



connectDatabase();



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME  ,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})



// =====================================================================================
// RAZORPAY
// exports.instance = new Razorpay({
//   key_id: process.env.RAZORPAY_KEYID,
//   key_secret: process.env.RAZORPAY_KEYSECRET,
// });











const server = app.listen(process.env.PORT,()=>{
    console.log(`Server Is Working On http://localhost:${process.env.PORT}`);
})







// Unhandled Promise Rejection
//agar mongodb ni string baraber nai hoi to
//server jaate jj crashh krri devaa nu
// etle bijaa issues nai aave

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
      //j uppr function ma process.on lakhiyu te.......process ni baar aavi jaai

      //database file maa monoose.connect lakhelu htu temaa catch blok delete kriyo
    //   coz hvee teni error ahiyaa handle thaii 6 etle
    });
  });