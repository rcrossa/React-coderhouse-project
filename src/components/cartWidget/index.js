import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CardWidget = () => {
    return (
        <Link to="/cart">
            <AiOutlineShoppingCart />
        </Link>
    );
}

export default CardWidget;
