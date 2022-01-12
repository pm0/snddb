import React from 'react';
import { graphql } from 'gatsby';
import GraphQLErrorList from '../components/GraphQLErrorList';
import HeroPageContent from '../pageContent/HeroPageContent';
import SEO from '../components/SEO';
import PageLayout from '../containers/PageLayout';
import { formatHero } from '../lib/helpers';

export const query = graphql`
  query HeroPageTemplateQuery($id: String!) {
    hero(jsonId: { eq: $id }) {
      name
      level
      hp
      type
      faces {
        value
        effect {
          description
          jsonId
          hasValue
          references {
            description
            jsonId
          }
        }
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

const HeroPageTemplate = (props) => {
  const { data, pageContext, errors } = props;

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const hero = data && data.hero;
  if (hero) {
    formatHero(hero);
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
