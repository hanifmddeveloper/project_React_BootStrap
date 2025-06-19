import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "./blog.css"

const Blog = () => {
  return (

 <section className='blog'>
  <Container>
    <Row >
    <Col lg = {{span:6,offset:3}}>
      <div className='blog_text1 text-center'>
      <h6>Read our Blog</h6>
      <h2>SHARE, INSPIRE, INNOVATE</h2>
     </div>
    </Col>
    </Row>
    <Row >
      <Col lg={3}>
      <div className='blogs'>
        <h6>Relationship</h6>
        <h4>WATCH AND LISTEN TO OUR SERMONS</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <h5>By Mathew Johnson</h5>
        <h5>Tuesday 13 May, 2021</h5>
        </div>
      </Col>
       <Col lg={3}>
      <div className='blogs'>
        <h6>Relationship</h6>
        <h4>WATCH AND LISTEN TO OUR SERMONS</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <h5>By Mathew Johnson</h5>
        <h5>Tuesday 13 May, 2021</h5>
        </div>
      </Col>
       <Col lg={3}>
      <div className='blogs'>
        <h6>Relationship</h6>
        <h4>WATCH AND LISTEN TO OUR SERMONS</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <h5>By Mathew Johnson</h5>
        <h5>Tuesday 13 May, 2021</h5>
        </div>
      </Col>
       <Col lg={3}>
      <div className='blogs'>
        <h6>Relationship</h6>
        <h4>WATCH AND LISTEN TO OUR SERMONS</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <h5>By Mathew Johnson</h5>
        <h5>Tuesday 13 May, 2021</h5>
        </div>
      </Col>
    </Row>
  </Container>
 </section>
  )
}

export default Blog
