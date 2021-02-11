import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Col, Row } from "react-bootstrap"
import Product from "../components/Product"
import { listProducts } from "../actions/productActions"
import Message from "../components/Message"
import Loader from "../components/Loader"

const Home = ({ match }) => {
	const dispatch = useDispatch()
	const keyword = match.params.keyword

	//state from store.js (reducer)
	const productList = useSelector((state) => state.productList)
	const { loading, products, error } = productList
	console.log(products)

	useEffect(() => {
		dispatch(listProducts(keyword))
	}, [dispatch, keyword])

	return (
		<>
			<h1>Latest products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</>
	)
}

export default Home
