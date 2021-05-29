import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';

const Nav = styled.nav`
    background: ${({ active }) => active ? '#fefefe' : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%)'};
    height: 80px;
    display: flex;
    justify-content: center;
    align-item: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 9999;
    
    @media screen and (max-width: 960px) {
        background: ${({ click }) => click ? '#fefefe' : 'transparent'};
        transition: 0.8s all ease;
    }
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width 1000px;
`;

const NavLogo = styled(Link)`
    color: #121212;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
`;

const NavIcon = styled.div`
    margin: 0 0.5rem 0 2rem;
`;

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const changeNav = () => {
        const isScroll = window.scrollY >= 80;
        setScroll(isScroll);
    }

    useEffect(() => {
        changeNav();
        window.addEventListener('scroll', changeNav);
        return () => {
            window.removeEventListener('scroll', changeNav);
        }
    }, []);

    return (
        <header>
            <IconContext.Provider value={{ color: '#121212' }}>
                <Nav active={scroll} click={click}>
                    <NavContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            Memes
                        </NavLogo>
                    </NavContainer>
                </Nav>
            </IconContext.Provider>
        </header>
    );
};

export default Navbar;
