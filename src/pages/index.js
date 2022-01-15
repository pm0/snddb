import React from 'react';
import { graphql } from 'gatsby';
import GraphQLErrorList from '../components/GraphQLErrorList';
import SEO from '../components/SEO';
import IndexPageContent from '../pageContent/IndexPageContent';
import PageLayout from '../containers/PageLayout';
import { mapEdgesToNodes, formatHero, formatDescriptionFromReferences } from '../lib/helpers';

export const query = graphql`
  query IndexPageQuery {
    heroes: allHero {
      edges {
        node {
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

  heroes.forEach((hero) => {
    formatHero(hero);
  });

  items.forEach((item) => {
    if (item && item.references) {
      formatDescriptionFromReferences(item);
    }
    if (item && item.spell && item.spell.references) {
      formatDescriptionFromReferences(item.spell);
    }
  });

  return (
    <PageLayout>
      <SEO title="Slice &amp; Dice DB" />
      <IndexPageContent heroes={heroes} items={items} />
    </PageLayout>
  );
};

export default IndexPage;
