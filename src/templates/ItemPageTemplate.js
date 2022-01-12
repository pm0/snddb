import React from 'react';
import { graphql } from 'gatsby';
import GraphQLErrorList from '../components/GraphQLErrorList';
import ItemPageContent from '../pageContent/ItemPageContent';
import SEO from '../components/SEO';
import PageLayout from '../containers/PageLayout';
import { formatDescriptionFromReferences } from '../lib/helpers';

export const query = graphql`
  query ItemPageTemplateQuery($id: String!) {
    item(jsonId: { eq: $id }) {
      name
      level
      description
      references {
        description
        jsonId
      }
      spell {
        cost
        description
        name
        references {
          jsonId
          description
        }
      }
    }
  }
`;

const ItemPageTemplate = (props) => {
  const { data, pageContext, errors } = props;

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const item = data && data.item;
  if (item && item.references) {
    formatDescriptionFromReferences(item);
  }
  if (item && item.spell && item.spell.references) {
    formatDescriptionFromReferences(item.spell);
  }

  return (
    <PageLayout>
      {errors && <SEO title="GraphQL Error" />}
      {item && <SEO title={item.name} />}
      {errors && <GraphQLErrorList errors={errors} />}
      {item && <ItemPageContent item={item} crumbs={crumbs} />}
    </PageLayout>
  );
};

export default ItemPageTemplate;
