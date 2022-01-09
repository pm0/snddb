import React from 'react';
import { graphql } from 'gatsby';
import GraphQLErrorList from '../components/GraphQLErrorList';
import HeroPageContent from '../pageContent/HeroPageContent';
import SEO from '../components/SEO';
import PageLayout from '../containers/PageLayout';
import { mapEdgesToNodes, addFacesEffectDescription } from '../lib/helpers';

export const query = graphql`
  query HeroPageTemplateQuery($id: String!, $effectIds: [String!]!) {
    hero: heroJson(jsonId: { eq: $id }) {
      name
      level
      faces {
        type
        value
      }
      spell {
        name
        cost
        description
      }
      type
    }
    effects: allEffectJson(filter: { jsonId: { in: $effectIds } }) {
      edges {
        node {
          jsonId
          description
          hasValue
        }
      }
    }
  }
`;

const HeroPageTemplate = (props) => {
  const { data, pageContext, errors } = props;

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const hero = data && data.hero;
  const effects = (data || {}).effects ? mapEdgesToNodes(data.effects) : [];
  if (hero && effects.length > 0) {
    addFacesEffectDescription(hero.faces, effects);
  }

  return (
    <PageLayout>
      {errors && <SEO title="GraphQL Error" />}
      {hero && <SEO title={hero.name} />}
      {errors && <GraphQLErrorList errors={errors} />}
      {hero && <HeroPageContent hero={hero} crumbs={crumbs} />}
    </PageLayout>
  );
};

export default HeroPageTemplate;
