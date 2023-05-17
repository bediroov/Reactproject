import React, { useEffect, useState } from 'react'
import Singlecard from '../components/Singlecard'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios';
import Cards from '../components/Cards';
import Sectionone from '../components/Sectionone';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const Shop = () => {
const {t} =useTranslation();
    const [product, setproduct] = useState([]);
    useEffect(() => {
      axios.get("http://127.0.0.1:5501/src/data/watchone.json")
        .then(res => setproduct(res.data))
    }, [])

  return (
 <>
  <h1 className='text-center mt-5'>{t("title.1")}</h1>
  <Container>
      <Row className='mt-3' >
        {product.slice(4, 7).map((item) => (
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
      <Cards/>
      <Footer/>
    </Container>
 </>

  
  )
}

export default Shop