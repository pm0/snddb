import React from 'react';
import { graphql } from 'gatsby';
import GraphQLErrorList from '../components/GraphQLErrorList';
import SEO from '../components/SEO';
import HeroesPageContent from '../pageContent/HeroesPageContent';
import PageLayout from '../containers/PageLayout';
import { mapEdgesToNodes } from '../lib/helpers';

export const query = graphql`
  query HeroPageQuery {
    heroes: allHeroJson {
      edges {
        node {
          type
          name
          level
          type
          jsonId
        }
      }
    }
  }
`;

const HeroesPage = (props) => {
  const { data, pageContext, errors } = props;

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const hero = data && data.hero;

  if (errors) {
    return (
      <PageLayout>
        <GraphQLErrorList errors={errors} />
      </PageLayout>
    );
  }

  const heroes = (data || {}).heroes ? mapEdgesToNodes(data.heroes) : [];

  return (
    <PageLayout>
      <SEO title="Heroes" />
      <HeroesPageContent heroes={heroes} crumbs={crumbs} />
    </PageLayout>
  );
};

export default HeroesPage;
