import React from 'react';
import styled from 'styled-components';
import logoImgSrc from 'src/images/logo.jpeg';

const Logo = () => (
    <LogoWrapper>
        <LogoImage src={logoImgSrc} alt="logo" />
    </LogoWrapper>
);

const LogoWrapper = styled.div`
    background-color: white;
    text-align: center;
`;

const LogoImage = styled.img`
    margin: 0 auto;
`;

export default Logo;
