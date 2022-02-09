/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { MDXProvider } from '@mdx-js/react'

const httpLink = new HttpLink({
	uri: `http://localhost:1337/graphql`,
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

const wrapPageElement = ({ element, props }) => (
  <>{element}</>
)

const wrapRootElement = ({ element }) => (
  <ApolloProvider client={apolloClient}>
    <MDXProvider>{element}</MDXProvider>
 </ApolloProvider>
)
export { wrapPageElement, wrapRootElement }