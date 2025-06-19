import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Icon from "../../assets/Icon1.png";

import "./subhead1.css";

const Subhead1 = () => {
  return (
    <div>
    <section>
      <Container className='subhead1'>
        <Row>
        <div className='text-center'>
            <h4 className='mb-5'>SUB-HEADLINE</h4>
            <h2 className='mb-5'>A CHURCH THAT'S RELEVANT</h2>
        </div>
        <Col lg={4}>
            <div className='subh1_main'>
               <div className='sunh1'>
                <img src={Icon} alt=''/>
               </div>
                <div className='sunh2'>
                <h3>About us</h3>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
               </div>
            </div>
        </Col>
        <Col lg={4}>
            <div className='subh1_main'>
               <div className='sunh1'>
                <img src={Icon} alt=''/>
               </div>
                <div className='sunh2'>
                <h3>Get involved</h3>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
               </div>
            </div>
        </Col>
        <Col lg={4}>
            <div className='subh1_main'>
               <div className='sunh1'>
                <img src={Icon} alt=''/>
               </div>
                <div className='sunh2'>
                <h3>Giving back</h3>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
               </div>
            </div>
        </Col>

        </Row>
      </Container>
      </section>
    </div>
  )
}

export default Subhead1
