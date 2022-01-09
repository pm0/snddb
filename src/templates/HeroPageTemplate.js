import React from 'react';
import { graphql } from 'gatsby';
import GraphQLErrorList from '../components/GraphQLErrorList';
import HeroPageContent from '../pageContent/HeroPageContent';
import SEO from '../components/SEO';
import PageLayout from '../containers/PageLayout';

export const query = graphql`
  query HeroPageTemplateQuery($id: String!) {
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
  }
`;

const HeroPageTemplate = (props) => {
  const { data, pageContext, errors } = props;

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const hero = data && data.hero;

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
