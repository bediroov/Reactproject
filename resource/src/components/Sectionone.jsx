import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import log1 from "../assets/img/tes-4.jpg"
import log2 from "../assets/img/tesm-2.jpg"
import log3 from "../assets/img/tesm-3.jpg"
import { useTranslation } from 'react-i18next'
const Sectionone = () => {

  const {t} =useTranslation;
  return (
 <div className="sectionone mt-3">
 <h2 className='text-center   '>TESTIMONIALS</h2>
<Container>
<Row className='mt-5'>
<div className="col-12 col-sm-6 col-md-4">
<Card >
     
      <Card.Body>
        <Card.Title className='text-center'>Amazing piece of history</Card.Title>
        <Card.Text style={{color:'orange'}}  className='text-center'>
        Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
   
        <div className="image1 d-flex flex-column">
        <img  width={50} height={50} src={log1}alt="" />
       <h6 className='mt-3'>ANN SMITH</h6>
        </div>

      
      </Card.Body>
    </Card>
</div>

<div className="col-12 col-sm-6 col-md-4">
<Card >
<Card.Body>
        <Card.Title className='text-center'>Fabulous grounds</Card.Title>
        <Card.Text style={{color:'red'}}  className='text-center'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
   
        <div className="image1 d-flex flex-column">
        <img  width={50} height={50} src={log2}alt="" />
        <h6 className='mt-3'>Saitama one</h6>
        </div>

      
      </Card.Body>
    </Card>
</div>

<div className="col-12 col-sm-6 col-md-4">
<Card >
<Card.Body>
        <Card.Title className='text-center'>Great vineyard</Card.Title>
        <Card.Text style={{color:'blue'}}  className='text-center'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
   
        <div className="image1 d-flex flex-column">
        <img  width={50} height={50} src={log3}alt="" />
        <h6 className='mt-3'>SARA COLINTON</h6>
        </div>

      
      </Card.Body>
    </Card>
</div>

</Row>


</Container>

 </div>
  )
}

export default Sectionone