import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Memes from './memes';

const IndexPage = () => (
  <Layout>
    <Seo title="Memes" />
    <Memes />
  </Layout>
);

export default IndexPage
