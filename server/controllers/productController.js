const Product = require('../models/Product')

module.exports = {
    getAllProducts: async (req,res) => {
        let products = await Product.all()
        res.json(products)
    },
    getProduct: async (req,res) => {
        const product = await Product.get(req.params.id)
        if(product){
            res.json(product)
        }else{
            res.status(404).json({
                error: 'Product not found'
            })
        }
    },


}