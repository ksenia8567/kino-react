import React from 'react'
import AppView from '../views/Main/App.jsx'
import CardView from '../views/Card/Card.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <AppView />,
    },
    {
      path: "/card/:id",
      element: <CardView />,
    },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route