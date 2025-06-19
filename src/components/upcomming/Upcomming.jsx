import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Upimg1 from "../../assets/Upimg1.jpg"
import "./upcomming.css"
const Upcomming = () => {
  return (
    <div>
      <section>
        <Container className='upcome'>
        <Row>
        <Col lg ={{span:6,offset:3}}>
          <div className='text-center'>
            <h4 className='mb-5 uptext1'>UPCOMING SERMONS</h4>
            <h4 className='mb-5 uptext2'>JOIN US AND BECOME PART OF SOMETHING GREAT</h4>
          </div>
          </Col>
        </Row>
       <Row>
        <Col lg={4}>
        <div className='upcomeleft'>
        <div><h4>"20"<br/>"JULY"</h4>
        <h6>Upcoming Event</h6>
        <h2>WATCH AND LISTEN TO OUR SERMONS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className='up_year'>
          <div className='up_dateicon'>
            <a href='#'> </a>
          </div>
          <div className='up_datetext'>
            <p>"Friday 23:39 IST Saturday 11:20 ISD" <br/> "No 233 Main St. New York, United States"</p>
          </div>
        </div>
        
        <button>Register</button>
        </div>
        </Col>
        <Col lg={8}>
        <div className='upmore'>
          <img src={Upimg1} alt=''/>
          <h5>View all Sermons </h5>
        </div>
        </Col>
       </Row>
        </Container>
      </section>
    </div>
  )
}

export default Upcomming
