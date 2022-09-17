import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import App from './App';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
