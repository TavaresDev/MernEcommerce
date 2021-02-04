import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap"
import { addToCart} from '../actions/cartActions'
import Message from "../components/Message"
import Loader from "../components/Loader"

const CartPage = ({match, location, history}) => {
    const productId = match.params.id


    
    // get the qty from the params
    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty))
        }
       
    }, [dispatch, productId, qty])



    return (
        <div>
            Cart
        </div>
    )
}

export default CartPage
