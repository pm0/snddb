/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createHeroPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allHeroJson {
        edges {
          node {
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
            name
            level
            jsonId
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const heroEdges = (result.data.allHeroJson || {}).edges || [];

  heroEdges.forEach((edge) => {
    const id = edge.node.jsonId;
    const path = `/hero/${id}/`;

    createPage({
      path,
      component: require.resolve('./src/templates/HeroPageTemplate.js'),
      context: {
        id,
        effectIds: edge.node.faces
          .map((face) => (face ? face.type : ''))
          .filter((val, idx, self) => val && self.indexOf(val) === idx),
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createHeroPages(graphql, actions);
};
