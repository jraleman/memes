import React from 'react';
import Layout from '../containers/layout';
import SEO from '../components/seo';
import HeroSection from '../components/hero-section';

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <h1>Home Page</h1>
            <HeroSection />
        </Layout>
    );
};

export default IndexPage;
