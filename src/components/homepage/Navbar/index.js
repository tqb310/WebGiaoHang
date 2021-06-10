import React from 'react';
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer, 
    NavLogo,
    MobileIcon, 
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>delivery</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='tracking'>Theo dõi vận đơn</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Dịch vụ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>Liên hệ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>Đăng ký</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to='signin'>Đăng nhập</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar