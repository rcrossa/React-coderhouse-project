import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './style.css';

const ItemCard = ({ product }) => {
    return (
        <>
            <Card className='democard'>
                <Card.Img variant="top" src={product.pictureUrl} className="imagen" />
                <Card.Body className='democardbody'>

                    <Card.Title><span className='demoTitle'> {product.title}</span></Card.Title>
                    <Card.Text><span className='demoDescription'>{product.description}</span></Card.Text>
                    <Card.Text><span className='demoPrice'>$ {product.price}</span></Card.Text>
                    <Card.Text>
                        <Link to={`/item/${product.id}`}>
                            <button className='btn_add' >Ver detalle</button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default ItemCard;
