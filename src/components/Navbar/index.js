import React, { useEffect } from 'react';
// import { Fabars, Fatime } from ''

const Navbar = () => {
    const [click, setClick] = usetate(false);
    const [scroll, setScroll] = usetate(false);

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
                <nav active={scroll} click={click}>

                </nav>
            </IconContext.Provider>
        </header>
    );
};

export default Navbar;
