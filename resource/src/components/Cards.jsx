import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { ProductContext } from '../context/ProductContext'
import Singlecard from "./Singlecard"




const Cards = () => {

  const [product] = useContext(ProductContext);
 
  return (
    <Container>
      <Row className='mt-3' >
        {product.slice(0, 3).map((item) => (
          <Singlecard
           photo={item.photo}
           title={item.title}
           number={item.number}
           id={item.id}      
           price={item.price}
           key={item.id}
           alldata={item}
          />
        ))}

      </Row>
    </Container>

  )
}

export default Cards