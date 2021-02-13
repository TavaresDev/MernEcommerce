import React, { useEffect, useState } from 'react'
import { Button, Form , Row, Col, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import {login} from '../actions/userActions'
import { useTranslation } from 'react-i18next'


const LoginPage = ({location, history}) => {
    const {t, i18n} = useTranslation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = userLogin
    
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }


    return (
        <FormContainer>
            <h1>{t('signInTitle')}</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading &&  <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email' >
                    <Form.Label>{t('emailAddress')}</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder={t('emailAddress')}
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}                        
                        ></Form.Control>
                </Form.Group>
                <Form.Group controlId='password' >
                    <Form.Label>{t('password')}</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder={t('password')}
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}                        
                        ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>{t('signIn')}</Button>
            </Form>
            <Row>
                <Col>
                    {t('newCustomer')}? {' '}
                     <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}> {t('register')}</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginPage
