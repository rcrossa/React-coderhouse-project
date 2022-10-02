import React from 'react';
import ItemCard from '../item_Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

const ItemList = ({ products }) => {
    return (
        <Container>
            <Row className="itemList" >
                {products.map((product) => (
                    <Col className='columList' xs="6" sm="auto" md="auto" lg="auto">
                        <ItemCard key={product.id} product={product} />
                    </Col>
                ))}
            </Row>
        </Container>

    );
}

export default ItemList;
