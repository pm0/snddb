import React from 'react';
import { graphql } from 'gatsby';
import GraphQLErrorList from '../components/GraphQLErrorList';
import SEO from '../components/SEO';
import ItemsPageContent from '../pageContent/ItemsPageContent';
import PageLayout from '../containers/PageLayout';
import { mapEdgesToNodes } from '../lib/helpers';

export const query = graphql`
  query ItemPageQuery {
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

const ItemsPage = (props) => {
  const { data, pageContext, errors } = props;

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  if (errors) {
    return (
      <PageLayout>
        <GraphQLErrorList errors={errors} />
      </PageLayout>
    );
  }

  const items = (data || {}).items ? mapEdgesToNodes(data.items) : [];

  return (
    <PageLayout>
      <SEO title="Items" />
      <ItemsPageContent items={items} crumbs={crumbs} />
    </PageLayout>
  );
};

export default ItemsPage;
