import React, { useContext } from 'react'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import logo from "../assets/img/logo (1).png"

import { LinkContainer } from 'react-router-bootstrap'
import { useCart } from 'react-use-cart'
import { useTranslation } from 'react-i18next'
import { ColorContext } from '../context/ColorContext'
import { i18n } from 'i18next'
const Header = () => {

  const {totalItems} =useCart();
  const {i18n}=useTranslation();
  const [mode ,setMode] =useContext(ColorContext);

const changevalue=(lang)=>{
i18n.changeLanguage(lang)

}

  return (





    <Navbar bg="light" expand="lg">
      <Container fluid>


      <NavDropdown style={{color:"orange"}} title="Lang" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Lang</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Button variant='warning' onClick={()=>changevalue("az")} >AZ</Button>
              </NavDropdown.Item>
             
              <NavDropdown.Item href="#action/3.2">
              <Button variant='success' onClick={()=>changevalue("tr")}>TR</Button>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                <Button  onClick={()=>changevalue("en")}>EN</Button>
              </NavDropdown.Item>
            </NavDropdown>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-around'>

      



          <Nav
            className="mx-auto my-3 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <>

            <div className="writing d-flex align-items-center justify content between ">

{/* <ul>

<li>
<LinkContainer to="/"><a href="">Home</a></LinkContainer>

</li>

<li>

<LinkContainer to="/shop"><a href="">Shop</a></LinkContainer>

</li>

<li>
<LinkContainer to="/product"><a href="">Product</a></LinkContainer>
</li> */}

     

          <LinkContainer to='/'><Nav.Link >Home</Nav.Link></LinkContainer>
              <LinkContainer to='/shop'><Nav.Link >Shop</Nav.Link></LinkContainer>
              <LinkContainer to='/product' ><Nav.Link >Product</Nav.Link></LinkContainer>
        

              </div>


              <div className="logo ms-5">
                <img className='' width={200} src={logo} alt="" />
              </div>
            </>

          </Nav>

          <LinkContainer to='/basket'><Button><i className="fa-solid fa-cart-shopping"></i>
          <span style={{
            display :"inline-block",
            width:"21px",
            height:"21px",
            backgroundColor:"red",
            borderRadius:"50%",
          }}>{totalItems}</span>

          
          </Button></LinkContainer>
         <Button variant='warning' className='ms-2'
         onClick={()=>{mode==="light"?setMode("dark"):setMode("light");
         mode==="light"?localStorage.setItem("mode","dark"):localStorage.setItem('mode',"light")
        }}
        


         >{mode}</Button>
        </Navbar.Collapse>

    
      </Container>
    </Navbar>

  )
}

export default Header