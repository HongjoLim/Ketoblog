import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import Write from './pages/Write/Write';
import Account from './pages/Account/Account';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

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
  const currentUser = null;
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
          path: "/blog",
          element: <BlogDetail />
        }]
    }
  ]);

  return (
    <RouterProvider router={router}>
      <Topbar />
      <Footer />
    </RouterProvider>
  );
}

export default App;
