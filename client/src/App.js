import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import Write from './pages/Write/Write';
import Account from './pages/Account/Account';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const currentUser = true;
  return (
    <BrowserRouter >
      <Topbar />
      <Home />
      <BlogDetail />
      <Account />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
