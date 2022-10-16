import React, { useContext } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import './style.css'

const Cart = () => {

    const { cart, total, removeItem } = useContext(CartContext);

    console.log({ cart, total });

    const handleClick = (itemId) => {
        removeItem(itemId);
    }

    const showTable = cart.length > 0
    return (
        <Container className='cartContainer'>
            <h1>Carrito de Compras</h1>
            {showTable && (
                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td><FaTrashAlt className='iconFaTrashAlt' onClick={() => handleClick(item.id)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <h3>Total: $ {total}</h3>
                </>
            )}
            {!showTable && (
                <>
                    <h3>Carrito de compra vacio</h3>
                    <Link to='/'>
                        <Button variant="success">Ver productos</Button>
                    </Link>
                </>
            )}
        </Container>

    );
}

export default Cart;
