import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Man from "../../assets/sub2Man.png"
import Women from "../../assets/sub2Women.png"
import Womenold from "../../assets/sub2Women2.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import "./subhead2.css"

const Subhead2 = () => {
  return (
    <div>
    <section className='subhead2'>
      <Container>
      <Row>
      <Col lg={{span:6,offset:3}}>
        <div className='text-center'>
           <h4 className='mb-5 tex1'>SUB-HEADLINE</h4>
           <h2 className='mb-5 tex2'>LOVE AND COMPASSION</h2>
           <p className='sub2t'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <button className="sub2btn"><a href='#'>Read more</a></button>
         </div>
         </Col>
        </Row>
         <Row>

          <Col lg={4}>
          <div>
            <img src={Man} alt=''/>
          </div>
          </Col>
          <Col lg={4}>
          <div className='mt-5'>
            <img src={Women} alt=''/>
          </div>
          </Col>
          <Col lg={4}>
          <div>
            <img src={Womenold} alt=''/>
          </div>
          </Col>
         </Row>
      <Row>
        <div className='text-center'>
            <h4 className='mt-5 text5'>OUR MISSION & VISION</h4>
            <h2 className=' mt-5 tex6'>CELEBRATE WITH US</h2>
            <p className='sub2t2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href='#' className='Read'>Read More <FaLongArrowAltRight /></a>
        </div>
       </Row>
      
      </Container>
      </section>
    </div>
  )
}

export default Subhead2
