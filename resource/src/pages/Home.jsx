import React from 'react'
import Cards from '../components/Cards'
import { Carousel } from 'react-bootstrap'
import slider1 from "../assets/img/slider-1-3 (1).jpg"
import slider2 from "../assets/img/slider-2-3.jpg"
import slider3 from "../assets/img/slider-3-3.jpg"
import Cards2 from '../components/Cards2'
import MainSection from '../components/MainSection'
import Sectionone from '../components/Sectionone'
import Sectiontwo from '../components/Sectiontwo'
import Footer from '../components/Footer'











const Home = () => {
  return (
    <>

      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Cards />
      <Cards2 />
      <MainSection />
      <Sectionone/>
      <Sectiontwo/>
      <Footer/>
    </>


  )
}

export default Home
