import express from 'express'
const router = express.Router()
import { getProductById, getProducts, deleteProduct, createProduct, updateProduct } from '../controllers/productControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js'

// same as
//router.get('/', getProducts)
router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)
    .put(protect, admin, updateProduct)
router.route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)


export default router