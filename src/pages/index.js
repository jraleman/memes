import * as React from 'react';
import Layout from 'src/components/layout';
import Seo from 'src/components/seo';
import Logo from 'src/components/logo';
import Memes from './memes';

const IndexPage = () => (
  <Layout>
    <Seo title="Memes" />
    <Logo />
    <hr />
    <Memes />
  </Layout>
);

export default IndexPage
