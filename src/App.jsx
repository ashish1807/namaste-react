import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Body } from './components/Body';
import { Header } from './components/Header';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import RestaurantMenu from './components/RestaurantMenu';
// import About from './components/About';
// import Grocery from './components/Grocery';

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'))

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
        element:<Suspense fallback={<h1>Loading...</h1>}> <About /></Suspense>,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
