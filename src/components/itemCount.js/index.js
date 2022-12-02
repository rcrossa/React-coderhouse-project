import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './style.css'


const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));
    const handleAdd = () => {
        setCount(count + 1);
    }
    const handleLess = () => {
        if (count > 1) { setCount(count - 1); }
    }

    const handleClick = () => onAdd(count);
    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className='contenedorItemCount'>
            <div className='btnCount'>
                <div>
                    <button onClick={handleAdd} disable={count >= stock} className={(count >= stock) ? 'btn_count_add_deactivate' : 'btn_count_add'} value='+' title='Disponible' >+</button>
                </div>
                <div><h5>{count}</h5></div>
                <div>
                    <button onClick={handleLess} disabled={count <= 1} className={(count <= 1) ? 'btn_count_less_deactivate' : 'btn_count_less'} value='-'>-</button>
                </div>
            </div>
            <div>
                <Button disable={stock <= 0} onClick={handleClick} >Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount;