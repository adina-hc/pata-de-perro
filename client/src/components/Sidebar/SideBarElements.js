import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:99;
    width:100%;
    height:100%;
    background:#2c787e;
    display:grid;
    align-items:center;
    top:0;
    right:0;
    transition:0.3s ease-in-out;
    opacity:${({isOpenMenu}) =>(isOpenMenu?'100%':'0')};
    top:${({ isOpenMenu})=> (isOpenMenu ? '0':'-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color:white;
`

export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2.5rem;
    cursor:pointer;
    outline:none;
`

export const SidebarWrapper = styled.div`
    color:white;
`

export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6,80px);
    text-align:center;

    @mediascreen and(max-width:480px){
        grid-template-rows:repeat(6,60px)
    }
`

export const SidebarLink = styled(LinkR)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:2.5rem;
    text-decoration:none;
    list-style:none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:#fff;
    cursor:pointer;
    &:hover{
        color:#d8a244;
        transition:0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;    
`

export const SidebarRoute = styled(LinkR)`
    border-radius:50px;
    background:#01bf71;
    white-space:nowrap;
    padding:16px 64px;
    color: #010606;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in.out;
    text-decoration:none;

    &:hover{
        transition: all 0.2s ease-in.out;
        background:white;
        color:#0106060;
    }
`