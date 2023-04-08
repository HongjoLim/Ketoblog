import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import Write from './pages/Write/Write';
import Account from './pages/Account/Account';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { useContext } from "react";
import { AuthContext } from './context/authContext';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


const Layout = () => (
  <>
    <Topbar />
    <Outlet />
    <Footer />
  </>
);

const App = () => {
  const { currentUser } = useContext(AuthContext);
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
          element: currentUser ? <Home /> : <Login />
        },
        {
          path: "/register",
          element: currentUser ? <Home /> : <Register />
        },
        {
          path: "/account",
          element: currentUser ? <Account /> : <Login />
        },
        {
          path: "/write",
          element: currentUser ? <Write /> : <Login />
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
