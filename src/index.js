import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Provider, createClient } from 'urql'

import ApolloApp from './ApolloApp'
import UrqlApp from './UrqlApp'

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://fl2mq.sse.codesandbox.io/graphql',
  }),
  cache: new InMemoryCache(),
})

const ApolloGraphQLApp = () => (
  <ApolloProvider client={apolloClient}>
    <ApolloApp />
  </ApolloProvider>
)

const urqlClient = createClient({
  url: 'https://fl2mq.sse.codesandbox.io/graphql',
})

const UrqlGraphQLApp = () => (
  <Provider value={urqlClient}>
    <UrqlApp />
  </Provider>
)

ReactDOM.render(<ApolloGraphQLApp />, document.getElementById('apolloRoot'))
ReactDOM.render(<UrqlGraphQLApp />, document.getElementById('urqlRoot'))
