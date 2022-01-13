import React from 'react';
import { graphql } from 'gatsby';
import GraphQLErrorList from '../components/GraphQLErrorList';
import SEO from '../components/SEO';
import IndexPageContent from '../pageContent/IndexPageContent';
import PageLayout from '../containers/PageLayout';
import { mapEdgesToNodes } from '../lib/helpers';

export const query = graphql`
  query IndexPageQuery {
    heroes: allHero {
      edges {
        node {
          type
          name
          level
          type
          order
          jsonId
        }
      }
    }
    items: allItem {
      edges {
        node {
          name
          level
          jsonId
        }
      }
    }
  }
`;

const IndexPage = ({ data, errors }) => {
  if (errors) {
    return (
      <PageLayout>
        <GraphQLErrorList errors={errors} />
      </PageLayout>
    );
  }

  const heroes = (data || {}).heroes ? mapEdgesToNodes(data.heroes) : [];
  const items = (data || {}).items ? mapEdgesToNodes(data.items) : [];

  return (
    <PageLayout>
      <SEO title="Slice &amp; Dice DB" />
      <IndexPageContent heroes={heroes} items={items} />
    </PageLayout>
  );
};

export default IndexPage;
