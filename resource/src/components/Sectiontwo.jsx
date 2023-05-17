import React from 'react'
import fot1 from "../assets/img/Untitled-1.png"
import fot2 from "../assets/img/Untitled-2.png"
import fot3 from "../assets/img/Untitled-3.png"
import fot4 from "../assets/img/Untitled-4.png"
import fot5 from "../assets/img/Untitled-5.png"
import { Container } from 'react-bootstrap'
const Sectiontwo = () => {
  return (
   
   <div className="footer">
    
   <Container className='ms-5'>
 <div className="row mt-3 g-5">
      <div className="col-12 col-sm-6 col-md-4 col-xl-2">
        <div className="card">
          <img src={fot1} className="card-img-top" alt="..." />
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-xl-2">
        <div className="card">
          <img src={fot2} className="card-img-top" alt="..." />
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-xl-2">
        <div className="card">
          <img src={fot3} className="card-img-top" alt="..." />
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-xl-2">
        <div className="card">
          <img src={fot4} className="card-img-top" alt="..." />
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-xl-2">
        <div className="card">
          <img src={fot5} className="card-img-top" alt="..." />
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-xl-2">
        <div className="card">
          <img src={fot2} className="card-img-top" alt="..." />
        </div>
      </div>
   
    </div>

   </Container>
   
   </div>

  )
}

export default Sectiontwo