import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <TitleContainer>
      <StyledH1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </StyledH1>
    </TitleContainer>
  </StyledHeader>
);

const StyledHeader = styled.header`
  background: #afdde9;
  margin-bottom: 1.45rem;
`;

const TitleContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;

const StyledH1 = styled.h1`
  margin: 0; 
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export default Header;
