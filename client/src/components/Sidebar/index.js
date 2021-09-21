import React from 'react'
import Auth from "../../utils/auth";
import { CloseIcon, Icon, SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink} from './SideBarElements';

const Sidebar = ({ isOpenMenu, toggleNav }) => {
    function toggle(){        
        toggleNav(isOpenMenu);
    }
    function showAsideNavigation(isOpenMenu) {
        if (Auth.loggedIn()) {
            return (

                <>
                    <SidebarContainer isOpenMenu={isOpenMenu} onClick={toggle}>
                        <Icon onClick={toggle}>
                            <CloseIcon />
                        </Icon>
                        <SidebarWrapper>
                            <SidebarMenu>
                                <SidebarLink to='/activities' onClick={toggle}>Activities</SidebarLink>
                                <SidebarLink to='/aboutus' onClick={toggle}>About Us</SidebarLink>
                                <SidebarLink to='/contactus' onClick={toggle}>Contact Us</SidebarLink>
                                <SidebarLink to='/orderHistory' onClick={toggle}>Order History</SidebarLink>
                                <SidebarLink to='/profile' onClick={toggle}>User Profile</SidebarLink>
                                <SidebarLink to="/" onClick={() => Auth.logout()}>Logout</SidebarLink>
                            </SidebarMenu>
                        </SidebarWrapper>
                    </SidebarContainer>
                </>
            );
        } else {
            return (
                <>
                    <SidebarContainer isOpenMenu={isOpenMenu} onClick={toggle}>
                        <Icon onClick={toggle}>
                            <CloseIcon />
                        </Icon>
                        <SidebarWrapper>
                            <SidebarMenu>
                                <SidebarLink to='/activities' onClick={toggle}>Activities</SidebarLink>
                                <SidebarLink to='/aboutus' onClick={toggle}>About Us</SidebarLink>
                                <SidebarLink to='/contactus' onClick={toggle}>Contact Us</SidebarLink>
                                <SidebarLink to='/signup' onClick={toggle}>Sign Up</SidebarLink>
                                <SidebarLink to='/login' onClick={toggle}>Login</SidebarLink>
                            </SidebarMenu>
                        </SidebarWrapper>
                    </SidebarContainer>
                </>
            );
        }
    }

    return (

        <>
            {showAsideNavigation(isOpenMenu)}
        </>
    )
}
export default Sidebar;