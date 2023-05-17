import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { Button } from 'react-bootstrap';
const DetailPage = () => {

    const [product] = useContext(ProductContext);
    const { bir } = useParams();

    const productdetails = product.find(p => p.id == bir)
    const {addItem} =useCart()
  const navigate =useNavigate()
    return (
<>
{productdetails === undefined ?<h1 className='text-center'>Loading</h1>: <div className='container'>
       <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
           <div className="col-10 col-sm-8 col-lg-6">
               <img  src={productdetails.photo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={900} height={500} loading="lazy" />
           </div>
           <div className="col-lg-6">
               <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productdetails.title}</h1>
               <p className="lead">{productdetails.number}</p>
             
               <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <Button
                   onClick={()=>{addItem(productdetails);
                    navigate("/basket")
                   }}       >Add to card</Button>
                 
                   <Link to="/"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2"  >Back</button></Link>
               </div>
           </div>
       </div>
   </div>}


</>
    )
}

export default DetailPage