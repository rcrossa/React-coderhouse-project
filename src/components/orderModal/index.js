import { Button, Modal, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style.css'

const OrderModal = ({ showModal, onClose, onBuy, orderId }) => {
    const [showOrderId, setShowOrderId] = useState(false);
    return (
        <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Finalizar Compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="ingrese nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese telefono" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer >
                <div className='modalfooter'>

                    {!orderId && (
                        <div className='btnsucess'>
                            <Button className="btnCancelar" variant="secondary" onClick={onClose}>
                                Cancelar
                            </Button>
                            <Button className="btnComprar" variant="success" onClick={onBuy}>
                                Comprar
                            </Button>
                        </div>
                    )}
                    {orderId && (
                        <div className='btnsuccess'>
                            <Alert key="success" variant="success">
                                Numero De Orden: {orderId}
                            </Alert>

                            <Link to='/'>
                                <Button variant="success" onClick={onBuy}>
                                    Comprar de nuevo
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default OrderModal;