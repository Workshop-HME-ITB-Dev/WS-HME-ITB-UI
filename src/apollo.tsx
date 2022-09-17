import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';
import { onError } from 'apollo-link-error'
import { setContext } from '@apollo/client/link/context';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.error(message))
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_BASE_URL + '/graphql',
});

const client = new ApolloClient({
  link: from([authLink, errorLink as any, httpLink]),
  cache: new InMemoryCache(),

});

export default client;