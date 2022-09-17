import NavbarMenu from './components/containers/navbar/index';
import { Contact } from './pages/contact/index';
import { Routes, Route } from 'react-router-dom';
import { Details } from './pages/details';
import { Product } from './pages/product';
import { Home } from './pages/home';
import './App.css';


function App() {
  return (
    <div className="App">
      <>
        <NavbarMenu />
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/details' element={<Details />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
