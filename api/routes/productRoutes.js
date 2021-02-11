import express from 'express'
const router = express.Router()
import { getProductById, getProducts, deleteProduct, createProduct, updateProduct, createProductReview, getTopProducts } from '../controllers/productControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js'

// same as
//router.get('/', getProducts)
router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)
    
router.get('/top', getTopProducts)
router.route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)
router.route('/:id/reviews').post(protect, createProductReview)


export default router