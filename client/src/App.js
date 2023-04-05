import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Write from './pages/Write/Write';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const currentUser = true;
  return (
    <BrowserRouter >
      <Topbar />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
