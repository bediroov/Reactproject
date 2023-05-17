import React, { useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';



const Cards2 = () => {

  const [product] = useContext(ProductContext);
  const { addItem } = useCart();
  const {t} =useTranslation();

  return (


    
    
    <>
      <Container>
        <h1 className='text-center mt-5 '>{t('title.0')}</h1>

        <Row className='g-5 mt-3'>
          {product.slice(3, 7).map((item) => (
            <Col sm={6} md={3}>
              <Card >
                <Card.Img height={300}  variant="top" src={item.photo} />
                <Card.Body>
                  <Card.Title>{item.title.substring(0,20)}</Card.Title>
                  <Card.Text>
                    {item.number}
                  </Card.Text>
                  <Link to={`/product/${item.id}`}><Button variant="warning">Go detail page</Button></Link>
                 <Button onClick={()=>(addItem(item))}>add to cart</Button>


                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>


    </>







  )
}

export default Cards2