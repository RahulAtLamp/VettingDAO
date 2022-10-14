import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/VettingDAOlogo.png';
import UAuth from '@uauth/js';
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";



// VettingDAOlogo.png
function Navigation() {


  const cookie = new Cookies();

  const [authoriz, setAuthorization] = useState();
  const [address, setAddress] = useState(cookie.get("UDaddress"));

  const login = async () => {
    const authorization = await authoriz.loginWithPopup()
    console.log(authorization);
    setAuthorization(authorization)
    setAddress(authorization.idToken.sub)
    cookie.set("UDaddress", authorization.idToken.sub, {
      path: "/",
      maxAge: 5000,
    });
  };

  const logout = async () => {
    await authoriz.logout();
    cookie.remove("UDaddress");
    window.location.reload();
  };

  useEffect(() => {
    setAddress(cookie.get('UDaddress'))
    const uauth = new UAuth({
      clientID: '4d534cc7-eae0-4116-9171-c5429dd07028',
      redirectUri: 'http://localhost:3000',
      scope: 'openid wallet'
    })
    setAuthorization(uauth);
  }, []);

  return (

    <Navbar>
      <Container>
        <Navbar.Brand>
          <img src={Logo} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav className="me-auto">
              <Nav.Link href="http://localhost:3000/upload">Upload</Nav.Link>
              <Nav.Link href="http://localhost:3000/member">Become a Member</Nav.Link>
              <Nav.Link href="http://localhost:3000/req">Dashboard</Nav.Link>

              {
                address
                  ?
                  <>
                    <span><Nav.Link href="#link" onClick={() => login()}>{address}</Nav.Link></span>
                    <button onClick={() => { logout() }}>Logout</button>
                  </>
                  :
                  <Nav.Link href="#link" onClick={() => login()}>Connect Wallet using UD</Nav.Link>
              }
            </Nav>
            {/* <button className="btnlg">Login With Unstoppable Domain</button> */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navigation;



