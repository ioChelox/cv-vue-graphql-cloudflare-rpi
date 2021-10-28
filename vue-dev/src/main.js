import Vue from "vue";
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo';
import dotenv from 'dotenv'

dotenv.config()
// import ApolloClient from 'apollo-boost'
// import { onError } from "apollo-link-error"
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";

Vue.config.productionTip = false;

// const httpLink = new HttpLink({
//   uri: "http://localhost:3000/graphql?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IiIsInVzZXJuYW1lIjoiIn0.b1gvcw1zQS2mCz3cwWbx6qU_syYJI7ZRwIfgKi9hcXI",
//   fetchOptions: {
//     mode: 'no-cors',
//   },
// })
// Error Handling
// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//       graphQLErrors.map(({ message, locations, path }) =>
//           console.log(
//               `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//           )
//       )
//   if (networkError) console.log(`[Network error]: ${networkError}`)
// })
const apolloClient = new ApolloClient({
  link: new createHttpLink({
    uri: "http://graphql.msanchez.xyz/graphql?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IiIsInVzZXJuYW1lIjoiIn0.O7rlpG48VSw1v2q7aUUPXYYO9VEZAZzYydfQDkoC99A"
//process.env.VUE_APP_URL_GRAPHQL
  }),
  cache: new InMemoryCache(),
  // connectToDevTools: true
})

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})
//creating apollo client
// const client = new ApolloClient({  
//   uri: "http://localhost:3000/graphql",
//   request: operation => {
//     operation.setContext({
//       headers: {
//         authorization: 'Bearer '+'a529e29ef1ff8ea7f95cb0aec30f590ed156372c'
//       },
//     });
//   }
// });

// const apolloProvider = new VueApollo({
//   defaultClient: client,
// })

new Vue({
  vuetify,
  render: h => h(App),
  apolloProvider
}).$mount("#app");
