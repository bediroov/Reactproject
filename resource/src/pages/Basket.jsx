import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart'

const Basket = () => {
const {isEmpty,items,updateItemQuantity,removeItem,cartTotal} =useCart();

  return (


   <>
   {isEmpty ? <h1 className='text-center mt-3'>This page is empty</h1>: <>
   <h1 className='text-center my-5'>Your Watches</h1>
   <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      
{items.map(mehsul=>(
     
     <tr>
     <td>#</td>
     <td><img width={50} src={mehsul.photo} alt="" /></td>
    <td>{mehsul.title}</td>
     <td>{mehsul.price*mehsul.quantity}$</td>
     <td>
<Button  onClick={() => updateItemQuantity(mehsul.id, mehsul.quantity - 1)}   variant='danger'  >-</Button>
<span className='mx-2'>{mehsul.quantity}</span>
<Button   onClick={() => updateItemQuantity(mehsul.id, mehsul.quantity + 1)}  variant='success'>+</Button>
     </td>
<td><Button onClick={()=>removeItem(mehsul.id)}  >X</Button></td>
   </tr>
))}
    
       
      </tbody>
 
    </Table>

    <h1>Total price:{cartTotal}$</h1>
   </>
   }
   </>
  )
}

export default Basket