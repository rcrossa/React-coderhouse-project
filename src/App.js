import React from 'react';
import NavbarMenu from './components/containers/navbar/index';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/containers/item_ListContainer';
import ItemDetailsContainer from './components/itemDetail/ItemDetailsContainer';
import Checkout from './components/checkout/Checkout';
import Cart from './components/cart/Cart';
import { FavoritosProvider } from './contexts/FavouritesContex';
import { BrowserRouter } from 'react-router-dom';
import CacheContext, { CacheProvider } from './contexts/CacheContext';
import { CartProvider } from './contexts/CartContext';
function App() {
  // // acceso a un documento especifico
  // useEffect(() => {
  //   const database = getFirestore();

  //   //obtener referencia al documento
  //   const itemReference = doc(database, 'items', 'n7AItg90V2pEYjNPEuNp');

  //   //obtener el documento a partir de la referencia
  //   getDoc(itemReference)
  //     .then((snapshot) => {

  //       // preguntamos si existe este documento
  //       if (snapshot.exists()) {
  //         // armamos un objeto literal.
  //         const item = {
  //           id: snapshot.id,
  //           ...snapshot.data
  //         };
  //         console.log(item);
  //       }
  //     })
  //     .catch(error => console.warn(error));
  // }, []);
  return (
    <div className="App">
      <BrowserRouter basename='/react-coderhouse-project/'>
        <CacheProvider>
          <CartProvider>
            <NavbarMenu />
            <FavoritosProvider>
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailsContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
              </Routes>
            </FavoritosProvider>
          </CartProvider>
        </CacheProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
