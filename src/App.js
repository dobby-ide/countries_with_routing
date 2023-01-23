import './App.css';
import axios from 'axios';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
//import Countries from './pages/Countries';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import Country from './pages/Country';
import { lazy, Suspense } from 'react';
const Countries = lazy(() => import('./pages/Countries'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: 'countries',
        element: (
          <Suspense fallback={<p>loading...</p>}>
            <Countries />
          </Suspense>
        ),
        loader: async () => {
          // import('./pages/Countries').then((module) => module.loader());
          const { data } = await axios.get(
            'https://restcountries.com/v3.1/all'
          );
          return data;
        },
      },
      {
        path: 'countries/:id',
        element: <Country />,
        loader: async ({ params }) => {
          const countryId = params.id;
          const { data } = await axios.get(
            `https://restcountries.com/v3.1/name/${countryId}`
          );
          return data;
        },
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
