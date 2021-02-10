import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/profilePage'
import ShippingPage from './pages/ShippingPage'
import PaymentPage from './pages/PaymentPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import OrderPage from './pages/OrderPage'
import UserListPage from './pages/UserListPage'
import UserEditPage from './pages/UserEditPage'
import ProductListPage from './pages/ProductListPage'


const App = () => {
  return (
    <Router>

    <Header/>
      <main className='py-3'>
        <Container>
         <Route path='/' component={Home} exact/>
         <Route path='/login' component={LoginPage}/>
         <Route path='/shipping' component={ShippingPage}/>
         <Route path='/order/:id' component={OrderPage}/>
         <Route path='/payment' component={PaymentPage}/>
         <Route path='/placeorder' component={PlaceOrderPage}/>
         <Route path='/register' component={RegisterPage}/>
         <Route path='/profile' component={ProfilePage}/>
         <Route path='/admin/userlist' component={UserListPage}/>
         <Route path='/admin/productlist' component={ProductListPage}/>
         <Route path='/admin/user/:id/edit' component={UserEditPage}/>
         <Route path='/product/:id' component={ProductPage} />
         <Route path='/cart/:id?' component={CartPage} />
            
        </Container>
      </main>
      <Footer/>

    
    </Router>
  )
}


export default App
