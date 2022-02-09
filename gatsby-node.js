
const path = require(`path`)
// const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
// const { makePressRelaseSlug } = require(`./src/utils`)
const { makeSinglePost } = require("./src/utils")

exports.createPages = async function ({ actions, graphql }) {
	const  {data}  = await graphql(`
    query {
      msys {
        datacenterServices {
          data {
            attributes {
              Title
              slug
              Description
              Icon {
                data {
                  attributes {
                    url
                  }
                }
              }
              link {
                href
                label
              }
            }
            id
          }
        }
        serviceSections {
          data {
            attributes {
              Description
              Title
              slug
              Icon {
                data {
                  attributes {
                    url
                  }
                }
              }
              link {
                href
                label
              }
            }
            id
          }
        }
      }
	}
	`)

// data.msys.datacenterServices.data.forEach(post => {
//   const slug = post.attributes.slug
//   actions.createPage({
//     path: makeSinglePost(post.attributes),
//     component: require.resolve("./src/templates/SinglePost.js"),
//     context: {
//       slug: slug
//     },
//   })
// })

data.msys.serviceSections.data.forEach(post=> {
  const slug = post.attributes.slug
  actions.createPage({
    path: makeSinglePost(post.attributes),
    component: require.resolve("./src/templates/SinglePost.js"),
    context: {
      slug: slug
    },
  })
})

// data.msys.pages.data.forEach(page => {
//   const slug = page.slug
//   actions.createPage({
//     path: makeSinglePage(page),
//     component: require.resolve("./src/templates/SinglePost.js"),
//     context: {
//       slug: slug
//     },
//   })
// })
}