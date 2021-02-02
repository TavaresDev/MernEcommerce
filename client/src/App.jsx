import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'


const App = () => {
  return (
    <Router>

    <Header/>
      <main className='py-3'>
        <Container>
         <Route path='/' component={Home} exact/>
         <Route path='/product/:id' component={ProductPage} />
         <Route path='/cart/:id?' component={CartPage} />
            
        </Container>
      </main>
      <Footer/>

    
    </Router>
  )
}


export default App
