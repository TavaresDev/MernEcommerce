import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {Link} from 'react-router-dom'
import { Col, Row } from "react-bootstrap"
import Product from "../components/Product"
import { listProducts } from "../actions/productActions"
import Message from "../components/Message"
import Loader from "../components/Loader"
import Paginate from "../components/Paginate"
import ProductCarousel from "../components/ProductCarousel"
import Meta from "../components/Meta"
import { useTranslation } from 'react-i18next';

const Home = ({ match }) => {
	const dispatch = useDispatch()
	const keyword = match.params.keyword

	const pageNumber = match.params.pageNumber || 1

	//state from store.js (reducer)
	const productList = useSelector((state) => state.productList)
	const { loading, products, error, page, pages } = productList
	console.log(products)

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber))
	}, [dispatch, keyword, pageNumber])

	const {t, i18n} = useTranslation()

	return (
		<>
			<Meta/>
			{!keyword ? <ProductCarousel/> : <Link to='/' classname='btn btn-light'>Go back</Link>}
			
			<h1>{t('Latest products')}</h1>
			{/* <h1>{t('Welcome to React')}</h1> */}
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
				<Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
				</>
			)}
		</>
	)
}

export default Home
