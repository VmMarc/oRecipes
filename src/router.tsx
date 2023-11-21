/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Error from './components/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    // en fonction de la route, on va charger un composant différent dans App
    // Ce composant se retrouvera à l'intérieur du composant `Outlet` positionner dans App
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'recipe/:slug',
        element: <Recipe />,
      },
    ],
  },
]);
