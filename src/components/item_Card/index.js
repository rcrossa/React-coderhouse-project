import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import './style.css'

const ItemCard = ({ product }) => {

    return (
        <>
            <Card className='democard'>
                <Card.Img variant="top" src={product.pictureUrl} className="imagen" />
                <Card.Body className='democardbody'>

                    <Card.Title><p className='demoTitle'> {product.title}</p></Card.Title>
                    <Card.Text><p className='demoDescription'>{product.description}</p></Card.Text>
                    <Card.Text><p className='demoPrice'>$ {product.price}</p></Card.Text>
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
