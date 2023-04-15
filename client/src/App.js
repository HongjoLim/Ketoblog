import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import Write from './pages/Write/Write';
import Account from './pages/Account/Account';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { useContext } from 'react';
import { Context } from './context/Context';


const Layout = () => (
  <>
    <Topbar />
    <Outlet />
    <Footer />
  </>
);

const App = () => {
  const { user } = useContext(Context);
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/login",
          element: user ? <Home /> : <Login />
        },
        {
          path: "/register",
          element: user ? <Home /> : <Register />
        },
        {
          path: "/account",
          element: user ? <Account /> : <Login />
        },
        {
          path: "/write",
          element: user ? <Write /> : <Login />
        },
        {
          path: "/blog/:_id",
          element: <BlogDetail />
        }]
    }
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
