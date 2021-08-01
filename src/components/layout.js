import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from './header';
import './layout.css';

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ children }) => {
    const data = useStaticQuery(query);
    const footerLabel = `© ${new Date().getFullYear()} Built with Gatsby`;
    return (
        <Container>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <Content>
                <main>{children}</main>
                <Footer>{footerLabel}</Footer>
            </Content>
        </Container>
    );
};

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`;

const Footer = styled.footer`
  margin-top: 2rem;
`;

const Container = styled.div``;

export default Layout;