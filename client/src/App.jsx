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


const App = () => {
  return (
    <Router>

    <Header/>
      <main className='py-3'>
        <Container>
         <Route path='/' component={Home} exact/>
         <Route path='/login' component={LoginPage}/>
         <Route path='/register' component={RegisterPage}/>
         <Route path='/product/:id' component={ProductPage} />
         <Route path='/cart/:id?' component={CartPage} />
            
        </Container>
      </main>
      <Footer/>

    
    </Router>
  )
}


export default App
