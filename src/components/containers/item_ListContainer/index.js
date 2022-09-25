import React, { useState } from 'react';
import { data } from '../../../data/index.js';
import Container from 'react-bootstrap/Container';
import Item_List from '../../item_List/index.js';
import { styles } from './style';

const ItemListContainer = () => {
    const [datos, setdatos] = useState([]);

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(setdatos(data))
        }, 1000);
        reject(console.log("Hay un problema."))
    })

    getData.then(console.log(result => console.log(result))).catch(error => console.log(error));

    return (
        <div style={styles.section}>
            <Container >
                <h1 style={styles.h1}>Tienda</h1>
                <div style={styles.container}>
                    <Item_List styles={styles.Item_List} products={datos} />
                </div>
            </Container>
        </div>
    );
}

export default ItemListContainer;

