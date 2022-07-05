import React  from 'react'
import { Row, Col, Form } from "react-bootstrap"
import './Registration.css'

function Registration ({handleChange, formInputData, handleSubmit}) {

    return (
        <div className='container'>
            <Row className='form-row row'>
                <Col className='lg-6'>
                    <Form.Control type='text' onChange={handleChange} value={formInputData.firstName} name='firstName' className='form-control' placeholder='First Name' />
                    <Form.Control type='text' onChange={handleChange} value={formInputData.lasstName} name='lastName' className='form-control' placeholder='Last Name' />
                    <Form.Control type='number' onChange={handleChange} value={formInputData.npi} name='npi' className='form-control' placeholder='NPI #' />
                    <Form.Control type='text' onChange={handleChange} value={formInputData.phone} name='phone' className='form-control' placeholder='Phone Numbewr' />
                    <Form.Control type='text' onChange={handleChange} value={formInputData.email} name='email' className='form-control' placeholder='Email Address' />
                    
                </Col>
                <Col className='lg-6'>

                <Form.Control type='text' onChange={handleChange} value={formInputData.streetAddress} name='streetAddress' className='form-control' placeholder='Street Address' />
                    <Form.Control type='text' onChange={handleChange} value={formInputData.city} name='city' className='form-control' placeholder='City' />
                    <Form.Control type='text' onChange={handleChange} value={formInputData.state} name='state' className='form-control' placeholder='State' />
                    <Form.Control type='text' onChange={handleChange} value={formInputData.zip} name='zip' className='form-control' placeholder='Zip Code' />
                    <Form.Control type='text' onChange={handleChange} value={formInputData.country} name='country' className='form-control' placeholder='Country' />
                </Col>
            </Row>
            <Form.Control type='submit' onClick={handleSubmit} className='btn-primary' />
        </div>
        
    )
}

export default Registration;