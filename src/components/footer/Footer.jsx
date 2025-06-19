import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Flogo from "../../assets/footerLogo.png"
// import { FaFacebook } from "react-icons/fa";
import "./footer.css"

const Footer = () => {
  return (
   <section>
    <Container className='footer'>
      <Row>
        <Col lg={2}>
        <div className='fleftText'>
          <img src={Flogo} alt=''/>
          <h4>© Copyright Finsweet 2022</h4>
          <h6>(480) 555-0103</h6>
          <h6>4517 Washington Ave. </h6>
          <h6>finsweet@example.com</h6>
          </div>
        </Col>
        <Col lg = {{span:1,offset:2}}>
        <div className='fMiddle'>
          <h5>Quicklinks</h5>
          <h6><a href='#'>Aboutus</a></h6>
          <h6><a href='#'>Sermons</a></h6>
          <h6><a href='#'>Events</a></h6>
          <h6><a href='#'>Blog</a></h6>
        </div>
       </Col> 
       <Col lg={2}>
        <div className='footericon'>
          <h5>Connect </h5>
        <div className='fIcon_main'>
         {/* <div className='fIcon1'>
         <a href='#'>
          <a href='#'><FaFacebook /></a>
         </a>
         </div>
         <div className='fIcon1'>
         <a href='#'>
          <a href='#'><FaFacebook /></a>
         </a>
         </div>
         <div className='fIcon1'>
         <a href='#'>
          <a href='#'><FaFacebook /></a>
         </a>
         </div> */}
        </div>
        </div>
       </Col>
       <Col lg={5}>
        <div className='fwriteTest'>
          <h3>Subscribe to get Latest Updates and News</h3>
          <div className='subsEmail'>
            <input type='email'className='email_input'placeholder='Yourmail@gmail.com'/>
            <button className='subsbtn'>Subscribe </button>
          </div>
        </div>
       </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Footer
