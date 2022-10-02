import { Routes, Route } from 'react-router-dom';
import { Contact } from '../pages/contact/index';
import { Details } from '../pages/details';
import { Product } from '../pages/product';
import { Home } from '../pages/home';
import ItemListContainer from '../components/containers/item_ListContainer';
import ItemDetailsContainer from '../components/itemDetailsContainer/ItemDetailsContainer';
import Checkout from '../components/checkout/Checkout';
import Cart from '../components/cart/Cart';


function Rutas() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category/:categoryName' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailsContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                {/* <Route path='/product' element={<Product />} />
                <Route path='/details' element={<Details />} />
                <Route path='/contact' element={<Contact />} /> */}
            </Routes>
        </>
    );
}

export default Rutas;