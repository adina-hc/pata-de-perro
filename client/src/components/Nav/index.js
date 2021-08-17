import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavBar = styled.nav`
  font-family: "Permanent Marker", cursive;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: #2c787e;
  color: #ffffff;
  padding: 20px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  box-sizing: border-box;


  a {
    text-decoration: none;
    color: #183954;
    transition: color 0.3s ease;

    &:hover {
      color: #d8a244;
    }
  }

  input {
    display: block;
    width: 35px;
    height: 25px;
    margin: 0;
    position: absolute;
    cursor: pointer;
    opacity: 0;

    /* hide this */
    z-index: 2;

    /* and place it over the hamburger */
    -webkit-touch-callout: none;
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #ffffff;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

    &:first-child {
      transform-origin: 0% 0%;
    }

    &:nth-child(3) {
      transform-origin: 0% 100%;
    }
  }

  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(3px, -1px);
    background: #183954;

    &:nth-child(4) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    &:nth-child(3) {
      transform: rotate(-45deg) translate(-5px, 11px);
    }
  }
.menu-logo {
  line-height: 0;
  margin: 0 20px;
}

#pawicon {
  transition: all 0.6s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
}

.menu-logo img {
  max-height: 40px;
  max-width: 100px;
  flex-shrink: 0;
}

/* Burger menu */

.menu {
  ul {
    list-style: none;
  }

  li {
    padding: 10px 0;
    font-size: 22px;
  }
}

/* mobile styles */
@media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-end;

  .menu-logo {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    img {
      max-height: 30px;
    }
  }

  .menu {
    position: absolute;
    box-sizing: border-box;
    width: 300px;
    right: -300px;
    top: 0;
    margin: -20px;
    padding: 75px 50px 50px;
    background: #ffffff;
    -webkit-font-smoothing: antialiased;

    /* to stop flickering of text in safari */
    transform-origin: 0% 0%;
    transform: translateX(0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  input:checked ~ .menu {
    transform: translateX(-100%);
  }
}

/* desktop styles */
@media only screen and (min-width: 768px) {
    width: 100%;

    a {
      color: #ffffff;
    }

    input, span {
      display: none;
    }

  /* Burger menu */

  .menu {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      padding: 0;
    }

    li {
      padding: 0 20px;
    }
  }
}
`;


function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            <Link to="/aboutus">About us</Link>
          </li>
          <li className="mx-1">
            <Link to="/Contactus">Contact us</Link>
          </li>
          <li className="mx-1">
            <Link to="/activities">Activities</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <>
         <input type="checkbox" aria-label="Toggle menu" />
          <span></span>
          <span></span>
          <span></span>
    
          <a href="/" class="menu-logo" id="pawicon"    >
            <img
              src="https://image.flaticon.com/icons/png/512/3464/3464028.png"
              alt="dog paw logo"
            />
          </a>
          <div class="menu">
          <ul>
            <li>
              <Link to="/activities">Activities</Link>
            </li>
            
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/signup">Sign-Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <a href=""> </a>
            </li>
          </ul>
          </div>
        </>
      );
    }
  }

  return (      
      <>
        <NavBar className="menu-container">
          {showNavigation()}
        </NavBar>
      </>
  );
}

export default Nav;
