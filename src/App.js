import React from 'react';
import NavbarMenu from './components/containers/navbar/index';
import './App.css';
import ItemListContainer from './components/containers/item_ListContainer';
import ItemDetailsContainer from './components/itemDetail/ItemDetailsContainer';
import Checkout from './components/checkout/Checkout';
import Cart from './components/cart/Cart';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/react-coderhouse-project/'>
        <CartProvider>
          <NavbarMenu />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailsContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
