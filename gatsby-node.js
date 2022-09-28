const SiteConfig = require('./src/config/site')
const company = SiteConfig.company
const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query ($company: String) {
      allStrapiLocation(filter: {company: {name: {eq: $company}}}) {
        nodes {
          id
          name
        }
      }
    }
  `)

  data.allStrapiLocation.nodes.forEach(node => {
    const slug = slugify(node.name)
    actions.createPage({
      path: `locations/${slug}`,
      component: require.resolve(`./src/templates/locationPageTemplate.js`),
      context: { id: node.id },
    })
  })
}
