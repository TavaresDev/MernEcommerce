import express from 'express'
const router = express.Router()
import { getProductById, getProducts, deleteProduct } from '../controllers/productControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js'

// same as
//router.get('/', getProducts)
router.route('/').get(getProducts)
router.route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)


export default router