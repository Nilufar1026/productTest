const {Router} = require('express')
const ProductController = require('../controllers/productController')

const router = new Router()

router.get('/',                       ProductController.getAllProducts)
router.get('/:id',                    ProductController.getProduct)

module.exports = router