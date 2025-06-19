import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Watchimg1 from "../../assets/watchimg1.png"
import Watchimg2 from "../../assets/watchimg2.png"
import Watchimg3 from "../../assets/watchimg3.png"
import Watchimg4 from "../../assets/watchimg4.png"
import "./watch.css"

const Watch = () => {
  return (
    <div>
    <section >
    <Container className='watch'>
     <Row>
     <Col lg ={{span:6,offset:3}}>
    <div className='text-center'>
      <h4 className='wtextup1 mb-5'>Watch and listen</h4>
      <h2 className='wtextup2 mb-5'>THE BENEFITS OF JOINING OUR CHURCH</h2>
    </div>
    </Col>
    </Row>
   <Row >
    <Col lg={3}>
     <div className='watch_img '>
        <img className='w-full img-fluid' src={Watchimg1} alt=''/>
        <div className='Watch_text'>
        <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      </div>
      </div>
      </Col>
      <Col lg={3}>
     <div className='watch_img'>
        <img className='w-full img-fluid' src={Watchimg2} alt=''/>
        {/* <div className='Watch_text'>
        <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      </div> */}
      </div>
      </Col>
      <Col lg={3}>
     <div className='watch_img'>
        <img className='w-full img-fluid' src={Watchimg3} alt=''/>
        {/* <div className='Watch_text'>
        <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      </div> */}
      </div>
      </Col>
      <Col lg={3}>
     <div className='watch_img'>
        <img className='w-full img-fluid' src={Watchimg4} alt=''/>
        {/* <div className='Watch_text'>
        <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      </div> */}
      </div>
      </Col>
    </Row>
        </Container>
    </section>
    </div>

  )  
}

export default Watch
