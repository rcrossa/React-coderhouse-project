import React, { useState } from 'react';
import ItemCard from '../item_Card';

const ItemDetail = ({ product }) => {
    const [count, setCount] = useState(0);

    const handleClick = (value) => {
        (value > 0) ? (setCount(value)) : (setCount(0));
    }
    return (
        <div>

            <ItemCard product={product} />
            <div>
                <h4>Cantidad de productos {count}</h4>
                <button onClick={() => handleClick(count - 1)} className='btn_count_less'> -</button>
                <button onClick={() => handleClick(count + 1)} className='btn_count_add'>+</button>
            </div>
        </div>
    );
}

export default ItemDetail;
