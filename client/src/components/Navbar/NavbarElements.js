import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
    background:#2c787e;
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;

    @medira screen and (max-width:960px){
        transition:0.8s all ease;
    }

`

export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:80px;
    z-index:1;
    width:100%;
    padding:0 24px;
    max-width:1100px
`

export const NavLogo = styled(LinkR)`
    color:white;
    justify-self:flex-start;
    cursor:pointer;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    margin-left:24px;
    font-weight:bold;
    text-decoration:none;
`

export const MobileIcon=styled.div`
    display:none;
    @media screen and (max-width:768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,60%);
        font-size:1.8rem;
        cursor:pointer;
        color:white;
    }
`

export const NavMenu = styled.ul` 
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right:-22px;
    @media screen and (max-width:768px){
        display:none;    
    }
`
export const NavItem = styled.li`
    height:80px;
`

export const NavLinks = styled(LinkR)`
    color:white;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer;
    font-size: 22px;
    &.active{
        border-bottom:3px solid #01bf71
    }
    &:hover{
        color:#d8a244;
        transition:0.2s ease-in-out;
    }
`

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;
    @media screen and (max-width:768px){
        display:none;    
    }
`


export const PawLink = styled(LinkR)`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
`

export const PawIcon = styled.img`
    max-height: 70px;
    max-width: 100px;
`
