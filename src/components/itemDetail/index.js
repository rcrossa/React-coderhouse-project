import React, { useContext, useState } from 'react';
import ItemCount from '../itemCount.js';
import ItemCard from '../item_Card';
import { Link } from "react-router-dom";
import CartContext from '../../contexts/CartContext';
import { Button } from 'react-bootstrap';
import './style.css';

const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true);

    const handleAdd = (value) => {
        setCount(value);
        setShowItemCount(false);
        addItem(product, value);
    };

    return (
        <div className='itemDetailContainer'>
            <ItemCard product={product} />
            {showItemCount && (<ItemCount
                initial={1}
                stock={10}
                onAdd={handleAdd}
            />)}
            {!showItemCount && (
                <Link to='/cart'>
                    <Button variant="success">
                        Ir al Carrito
                    </Button>
                </Link>
            )}
        </div>
    );
}

export default ItemDetail;
