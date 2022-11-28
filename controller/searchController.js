const Upload = require('../models/uploadSchema')

exports.searchProduct = async (req, res) => {
    //  searchTerm
    try {
        const searchTerm = req.body.searchTerm;
        const product = await Upload.find({ $text: { $search: searchTerm, $diacriticSensitive: true } });
        // res.render('search', { title: 'Projecto-Search', problem });
        res.json({ product: product });
    } catch (error) {
        res.send({ message: error.message || "Error Occured" });
    }
}