import React, { useState } from 'react'
import into1 from "../assets/img/intro-1.jpg"
import intro2 from "../assets/img/intro-2.jpg";
import { Container, Row } from 'react-bootstrap';
import viewphoto from '../data/viewphoto';


const Mainone = () => {
const [photo,setphoto]=useState(viewphoto[0].photo1);

  return (
    <>
      <Container>
       
        <div className="mainsection d-flex mt-3">
        <div className="col-12 col-sm-6 ">
            <img width={600} src={into1} alt="" />
           <div className="box   ">
           <h5 className='ms-5' style={{color:'green'}}>SALE UP TO 30% OFF ALL ITEMS</h5>
           <h3 className='ms-5' >BE THE FIRST TO
GET LIMITED EDITIONS</h3>
<button style={{backgroundColor:'red'}} className=' ms-5  d-flex align-items-center align-items-center' >Shop now</button>

           </div>
          </div>
          <div className="col-12 col-sm-6 mt-3 d-flex align-items-end justify-content-end">
          
            <img width={500} src={intro2} alt="" />
       
          </div>
        </div>

        {viewphoto.map(item=>(
      <img className='d-flex justify-content-center' src={photo} alt="" onMouseLeave={()=>
      setphoto(item.photo1)
      }
      onMouseMove={()=>
        setphoto(item.photo2)
      }
      />
    ))}

        
      </Container>
 


    </>
  )
}

export default Mainone