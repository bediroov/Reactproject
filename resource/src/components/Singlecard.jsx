import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';

import { ToastContainer, toast } from 'react-toastify';

const Singlecard = ({ photo, title,number,id,price,alldata }) => {
  
  const { addItem } = useCart();
  const notify = () => toast.warn('🦄 Add to cart', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  return (
    <Col sm={6} md={4}  >
      <Card  >
        <Card.Img height={300} variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          <Card.Text>
            {number}
          </Card.Text>
          <Link to={`/product/${id}`}><Button variant="primary">Go detail page</Button></Link>
          <Button onClick={()=>{notify(addItem(alldata))}} className='ms-3'  >Add to cart</Button>
          <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          
          />
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Singlecard