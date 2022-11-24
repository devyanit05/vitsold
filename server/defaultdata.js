// const productsdata = require("./constant/productsdata");
// const Product = require("./models/productSchema");

// const DefaultData = async (res) => {
//     try {
//         await Product.deleteMany({});
//         await Product.insertMany(productsdata)
//             .then(() => {
//                 console.log("done insertion")
//                 console.log(productsdata)
//                 // res.send("done")
//             }).catch((err) => {
//                 console.log(err.message)
//                 // res.send(err.message)
//             })
//     } catch (err) {
//         console.log("error: " + err.message);
//         // res.send(err.message)
//     }
// };

// module.exports = DefaultData