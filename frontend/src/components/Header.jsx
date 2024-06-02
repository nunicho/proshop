import React from "react";
//import {Navbar, Nav, Container} from 'react-bootstrap'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import NavDropdown from "react-bootstrap/NavDropdown";
import {LinkContainer} from "react-router-bootstrap"; 
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import {useSelector} from "react-redux"


const Header = () => {

  const {cartItems} = useSelector((state)=> state.cart)
  const {userInfo} = useSelector((state) => state.auth);

  const logoutHandler = () =>{
    console.log('logout')
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="ProShop" />
              ProShop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                  {
                    cartItems.length > 0 && (
                      <Badge pill bg='success' style={{marginLeft:'5px'}}>
                         {cartItems.reduce((a, c)=> a + c.qty, 0)}
                      </Badge>
                    )
                  }
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : ( <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser /> Sign in
                </Nav.Link>
              </LinkContainer>) }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
