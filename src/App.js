import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';
import Layout from './components/Layout/Layout';
import History from './pages/History';

const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/Users'));

const App = () => (
  <Layout>
    <Suspense fallback={<h1>Loaing..</h1>}>
      <Router>
        <Home path="/" />
        <Users path="/users" />
        <History path="/history/:id" />
      </Router>
    </Suspense>
  </Layout>
);

export default App;
