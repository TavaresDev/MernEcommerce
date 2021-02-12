import React, { useState } from "react"
import { Button, Form, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { savePaymentMethod } from "../actions/cartActions"
import CheckoutSteps from "../components/CheckoutSteps"
import FormContainer from "../components/FormContainer"

const PaymentPage = ({ history }) => {
	const cart = useSelector((state) => state.cart)
	const { shippingAddress } = cart

	if (!shippingAddress.address) {
		history.push('/shipping')

	}

	const [paymentMethod, setPaymentMethod] = useState("paypal")

	const dispatch = useDispatch()

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(savePaymentMethod(paymentMethod))
		history.push("/placeorder")
	}

	return (
		<FormContainer>
			<CheckoutSteps step1 step2 step3 />

			<h1>Payment Method</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='address'>
					<Form.Label as='legend'>Select Payment Method</Form.Label>
					<Col>
						<Form.Check
							type='radio'
							label='PayPal or CreditCard'
							id='PayPal'
							name='paymentMethod'
							value='PayPal'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
						></Form.Check>
						<Form.Check
							type='radio'
							label='Stripe'
							id='Stripe'
							name='paymentMethod'
							value='Stripe'
                            onChange={(e) => setPaymentMethod(e.target.value)}
						></Form.Check>

					</Col>
				</Form.Group>

				<Button type='submit' variant='primary'>
					Continue
				</Button>
			</Form>
		</FormContainer>
	)
}

export default PaymentPage
