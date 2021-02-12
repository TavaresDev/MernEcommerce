import React, { useEffect } from "react"
import { Button, Table } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"

import { listOrders } from "../actions/orderActions"
import TableContainer from "../components/TableContainer"

const OrderListPage = ({ history }) => {
	const dispatch = useDispatch()

	const orderList = useSelector((state) => state.orderList)
	const { loading, error, orders } = orderList

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listOrders())
		} else {
			history.pushState("/login")
		}
	}, [dispatch, history, userInfo])

  const trucate = (str) => {
    const num = 6
    return (str.length <= num ? str : str.slice(0, num) + '...')
  }
 

	return (
		<>
			<h1>Orders</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
        <TableContainer>
          	<thead>
						<tr>
							<th>ID</th>
							<th>USER</th>
							<th>DATE</th>
							<th>TOTAL</th>
							<th>PAID</th>
							<th>DELIVERED</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<tr key={order._id}>
								<LinkContainer to={`/order/${order._id}`}>
								  {/* <td> {order._id}</td> */}
								  <td>{trucate(order._id)}</td>

								</LinkContainer>
								<td>{order.user && order.user.name}</td>
								<td>{order.createdAt.substring(0, 10)}</td>
								<td>$ {order.totalPrice}</td>
								<td>
									{order.isPaid ? (
										order.paidAt.substring(0, 10)
									) : (
										<i className='fas fa-times' style={{ color: "red" }}></i>
									)}
								</td>
								<td>
									{order.isDelivered ? (
										order.deliveredAt.substring(0, 10)
									) : (
										<i className='fas fa-times' style={{ color: "red" }}></i>
									)}
								</td>
								<td>
									<LinkContainer to={`/order/${order._id}`}>
										<Button variant='light' className='btn-sm'>
											Details
										</Button>
									</LinkContainer>
								</td>
							</tr>
						))}
					</tbody>
        </TableContainer>

			)}
		</>
	)
}

export default OrderListPage
