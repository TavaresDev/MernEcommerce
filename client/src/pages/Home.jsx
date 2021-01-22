import React, {useState, useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
// import products from '../products.js'/
import Product from '../components/Product'
import axios from 'axios'


const Home = () => {
    const [products, setProducts] = useState([])
    // just diferent sintax from .get .then
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products')
            setProducts(data)

        }
        fetchProducts()
    }, [])

    return (
        <>
        <h1>Latest products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} xl={3} >
                        <Product product={product}/>
                    
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Home
