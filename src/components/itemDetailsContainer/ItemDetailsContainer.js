import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetailsContainer = () => {
    const { id } = useParams();
    useEffect(() => {
        console.log(id);
    }, [id]);

    return (
        <Container>
            <h1>Detalle del Producto</h1>
        </Container>
    );
}

export default ItemDetailsContainer;
