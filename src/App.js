import NavbarMenu from './components/containers/navbar/index';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/containers/item_ListContainer';
import ItemDetailsContainer from './components/itemDetail/ItemDetailsContainer';
import Checkout from './components/checkout/Checkout';
import Cart from './components/cart/Cart';


function App() {
  return (
    <div className="App">
      <>
        <NavbarMenu />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailsContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
