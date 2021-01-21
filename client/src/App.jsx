import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'


const App = () => {
  return (
    <>

    <Header/>
    <main className='py-3'>

      <Container>
        <Row>
        <Home/>
          
        </Row>

      </Container>
    </main>
      <Footer/>

    </>
  )
}


export default App
