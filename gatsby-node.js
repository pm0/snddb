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

/*
exports.createPages = async ({ graphql, actions }) => {
  await createHeroPages(graphql, actions);
  await createItemPages(graphql, actions);
};
*/
