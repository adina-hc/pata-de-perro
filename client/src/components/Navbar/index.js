import React from 'react'
import Auth from "../../utils/auth";
import {FaBars} from 'react-icons/fa'
import { MobileIcon, Nav,NavbarContainer,NavItem,NavLogo, NavMenu,NavLinks, PawLink, PawIcon } from './NavbarElements';

const Navbar = ({isOpenMenu,toggleNav}) => {
    function toggle(){
        toggleNav(isOpenMenu);
    }
    function showNavigation(toggleNav) {
        if (Auth.loggedIn()) {
          return (
    
            <>
                <Nav >
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <PawIcon src={'https://image.flaticon.com/icons/png/512/3464/3464028.png'}/>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="/activities">Activities</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/aboutus">About Us</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/contactus">Contact Us</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/orderHistory">Order History</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/profile">User Profile</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/"  onClick={() => Auth.logout()}>Logout</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </>
          );
        } else {
          return (
            <>
                <Nav >
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <PawIcon src={'https://image.flaticon.com/icons/png/512/3464/3464028.png'}/>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="/activities">Activities</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/aboutus">About Us</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/contactus">Contact Us</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/signup">Sign Up</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/login">Login</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </>
          );
        }
      }
    return (
        <>
            {showNavigation(isOpenMenu)}
        </>
    );
}

export default Navbar;