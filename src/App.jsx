import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { About } from './components/About';
import { Body } from './components/Body';
import { Header } from './components/Header';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import RestaurentMenu from './components/RestaurentMenu';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurents/:resId',
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
