/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      rickandmorty {
        locations(page: 1) {
          results {
            id
            name
          }
        }
      }
    }
  `)

  data.rickandmorty.locations.results.forEach(({ id, name }) => {
    actions.createPage({
      path: name,
      component: path.resolve("./src/components/Species.js"),
      context: {
        speciesId: id,
        speciesName: name,
      },
    })
  })
}
