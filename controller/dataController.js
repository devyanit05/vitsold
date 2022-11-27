const productsdata = require("../constant/productsdata");
const Product = require("../models/productSchema");


exports.DefaultData = async (req, res) => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productsdata)
            .then(() => {
                console.log("done insertion");
                // res.status(200)
                res.send("done")
            }).catch((err) => {
                console.log(err.message)
                res.send(err.message)
            })
    } catch (err) {
        console.log("error: " + err.message);
        res.send("error: " + err.message)
    }
};

// exports.addProduct = (req, res) => {
//     const obj = {
//         name: req.body.name,
//         desc: req.body.desc,
//         img: {
//             data: fs.readFileSync(path.join("D:/projection/uploads/" + req.file.filename)),
//             contentType: 'image/jpg'
//         },

//     }
//     Project.create(obj, (err, item) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             // item.save();
//             res.redirect('/');
//         }
//     });
// }

