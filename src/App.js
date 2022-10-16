import React, { useState, useEffect } from 'react';
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
import { doc, getFirestore, getDoc, collection } from 'firebase/firestore';
function App() {
  // acceso a un documento especifico
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

  // useEffect(() => {
  //   //obtenemos la db
  //   const database = getFirestore();

  //   //obtenemos la referencia a la collection
  //   const colectionReference = collection(database, 'items');

  //   //obtenemos datos a partir de la referencia creada.
  //   getDoc(colectionReference)
  //     .then((snapshot) => {
  //       // armamos una lista de objetos literales con los id y los demas campos
  //       const list = snapshot
  //         .docs
  //         .map((doc) => ({
  //           id: doc.id,
  //           ...doc.data()
  //         }));
  //       console.log(list);
  //     })
  //     .catch(error => console.warn());
  // })
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
