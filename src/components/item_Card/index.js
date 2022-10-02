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

                    <Card.Title><p className='demoTitle'> {product.name}</p></Card.Title>
                    <Card.Text className='demoDescription'>{product.description}</Card.Text>
                    <Card.Text className='demoPrice'>{product.price}</Card.Text>
                    <button className='btn_count_less'> -</button>
                    {product.quantity}
                    <button className='btn_count_add'>+</button>
                    <Card.Text>
                        <Link to={`/item/${product.id}`}><button className='btn_add' >Ver detalle</button></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default ItemCard;
