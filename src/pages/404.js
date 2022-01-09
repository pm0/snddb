import React from 'react';
import { Link } from 'gatsby';
import { Heading } from 'react-bulma-components';
import PageLayout from '../containers/PageLayout';
import BodyLayout from '../containers/BodyLayout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <PageLayout>
    <SEO title="404 Not Found" />
    <BodyLayout>
      <Heading size={2}>Page not found</Heading>
      <Heading size={4} subtitle>
        <Link to="/">Return home</Link>
      </Heading>
    </BodyLayout>
  </PageLayout>
);

export default NotFoundPage;
