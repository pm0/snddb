/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createSchemaCustomization = ({ actions }) => {
  const typeDefs = `
    type hero implements Node {
      faces: [heroFace]!
      spell: spell @link(by: "jsonId")
    }
    type heroFace {
      effect: effect! @link(by: "jsonId")
    }
    type effect implements Node {
      jsonId: String!
      references: [keyword!] @link(by: "jsonId")
    }
    type item implements Node {
      references: [keyword!] @link(by: "jsonId")
      spell: spell @link(by: "jsonId")
    }
    type spell implements Node {
      jsonId: String!
      references: [keyword] @link(by: "jsonId")
    }
    type keyword implements Node {
      jsonId: String!
    }
  `;
  actions.createTypes(typeDefs);
};

async function createHeroPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allHero {
        edges {
          node {
            jsonId
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const heroEdges = (result.data.allHero || {}).edges || [];

  heroEdges.forEach((edge) => {
    const id = edge.node.jsonId;
    const path = `/hero/${id}/`;

    createPage({
      path,
      component: require.resolve('./src/templates/HeroPageTemplate.js'),
      context: {
        id,
      },
    });
  });
}

async function createItemPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allItem {
        edges {
          node {
            jsonId
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const itemEdges = (result.data.allItem || {}).edges || [];

  itemEdges.forEach((edge) => {
    const id = edge.node.jsonId;
    const path = `/item/${id}/`;

    createPage({
      path,
      component: require.resolve('./src/templates/ItemPageTemplate.js'),
      context: {
        id,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createHeroPages(graphql, actions);
  await createItemPages(graphql, actions);
};
