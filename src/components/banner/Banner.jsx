import React from 'react'
import { Container,Row } from 'react-bootstrap';
import "./banner.css"

const Banner = () => {
  return (
   <div>
   <section className='banner'>
    <Container>
    <Row>
    <div>
    <h5>Welcome to our CHURCH</h5>
    <h1>Become a part of our community</h1>
     <button className='btn2'><a href='#'>Learn more</a></button>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
     </div>
    </Row>
    </Container>
    </section>
   </div>
  )
}

export default Banner
