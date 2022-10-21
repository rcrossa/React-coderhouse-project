import { clear } from '@testing-library/user-event/dist/clear';
import React, { useContext, useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import { createOrder } from '../../data/orders';
import OrderModal from '../orderModal/index.js';
import './style.css'


const buyerMock = {
    name: 'Usuario',
    phone: '123456789',
    email: 'test@gmail.com'
}

const Cart = () => {

    const { cart, total, removeItem, clear } = useContext(CartContext);
    const [user, setSer] = useState(buyerMock);
    const [showModal, setShowModal] = useState(false);
    const [orderId, setOrderId] = useState();
    console.log({ cart, total });

    const handleRemove = (itemId) => {
        removeItem(itemId);
    }

    const handleOpen = () => setShowModal(true);

    const handleClose = () => setShowModal(false);

    const handleBuy = async () => {
        const newOrder = {
            buyer: buyerMock,
            items: cart,
            total
        }
        const newOrderId = await createOrder(newOrder);
        setOrderId(newOrderId);
        clear();
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
                                    <td><FaTrashAlt className='iconFaTrashAlt' onClick={() => handleRemove(item.id)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <h3>Total: $ {total}</h3>
                    <Button variant="success" onClick={handleOpen}>Finalizar compra</Button>
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
            <OrderModal
                showModal={showModal}
                onClose={handleClose}
                onBuy={handleBuy}
                orderId={orderId}
            />

        </Container>

    );
}

export default Cart;
