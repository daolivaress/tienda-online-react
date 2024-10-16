import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShoppingCartProvider } from "./context/Context";
import Home from './pages/Home/Home';
import MyAccount from './pages/MyAccount/MyAccount';
import NotFound from './pages/NotFound/NotFound';
import MyOrders from './pages/MyOrders/MyOrders';
import SignIn from './pages/SignIn/SignIn';
import MyOrder from './pages/MyOrder/MyOrder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:category',
    element: <Home />,
  },
  {
    path: '/my-account',
    element: <MyAccount />,
  },
  {
    path: '/my-order',
    element: <MyOrder />,
  },
  {
    path: '/my-orders',
    element: <MyOrders />,
  },
  {
    path: '/my-orders/last',
    element: <MyOrder />,
  },
  {
    path: '/my-orders/:id',
    element: <MyOrder />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export const AppRouter = () => {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  );
};

export default AppRouter;