import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import slider1 from "../assets/img/intro-1.jpg"
import slider2 from "../assets/img/intro-2.jpg"
import Footer from '../components/Footer';


export const ProductContext = createContext();

const Product = () => {

    const [product, setproduct] = useState([]);
    useEffect(() => {
      axios.get("http://127.0.0.1:5501/src/data/watchone.json")
        .then(res => setproduct(res.data))
    }, [])

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
    {/* <Carousel.Item> */}
   

      {/* <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item> */}
  </Carousel>
  <Footer/>
   </>

  
  )
}

export default Product