import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
    return (
        <HeroContaienr>
            <HeroTitle>Memes</HeroTitle>
            <HeroBanner>See funny memes</HeroBanner>
        </HeroContaienr>
    );
};

const HeroContaienr = styled.div`
    background: url('../assets/background.jpg) center center cover no-repeat;
    height: 100h;
    width: 100%;
    display: flex;
    flex-direction: columns;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0, 0.2);
    object-fit: containet;
    margin-top: -80px;
`;

const HeroTitle = styled.h2`
    color: #fff;
    font-size: 100px;
    margin-top: 0;
    @media screen and (max-width: 960px) {
        font-size: 72px;
    }
    @media screen and (max-width: 768px) {
        font-size: 60px;
    }
`;

const HeroBanner = styled.p`
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`;

const HeroBtns = styled.div`
    margin-top: 32px;
`;

export default HeroSection;