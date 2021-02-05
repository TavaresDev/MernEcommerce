import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import cors from 'cors'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'


dotenv.config()
connectDB()

const app = express()

app.use(express.json())

// app.use(cors())

app.get('/', (req, res) => {
    res.send("APi is runing")
})
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Always watching... Running in ${process.env.NODE_ENV} on port ${PORT}`.blue))