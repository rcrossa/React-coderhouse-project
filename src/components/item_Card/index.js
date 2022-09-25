import React from 'react';
import DemoCard from 'react-bootstrap/Card';
import './style.css'

const ItemCard = ({ product }) => {

    return (

        <DemoCard className='democard'>
            <DemoCard.Img variant="top" src={product.image} />
            <DemoCard.Body className='democardbody'>
                <DemoCard.Title>{product.name}</DemoCard.Title>
                <DemoCard.Text>{product.description}</DemoCard.Text>
                <DemoCard.Text>
                    <button className='btn_count_less' >-</button>
                    {product.quantity}
                    <button className='btn_count_add'>+</button>
                </DemoCard.Text>
                <button className='btn_add' >Buy</button>
            </DemoCard.Body>
        </DemoCard>

    );
};

export default ItemCard;
