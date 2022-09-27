import { Routes, Route } from 'react-router-dom';
import { Contact } from '../pages/contact/index';
import { Details } from '../pages/details';
import { Product } from '../pages/product';
import { Home } from '../pages/home';


function Rutas() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/details' element={<Details />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    );
}

export default Rutas;