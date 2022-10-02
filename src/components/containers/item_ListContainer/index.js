import React, { useState, useEffect } from 'react';
import { getProducts, products } from '../../../data/index.js';
import ItemList from '../../item_List/index.js';
import { styles } from './style';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        getProducts()
            .then((products) => setDatos(products))
            .catch((error) => console.error(error));
    }, []);
    return (
        <div style={styles.section}>
            <h1 style={styles.h1}>Tienda</h1>
            <div style={styles.container}>
                <ItemList styles={styles.Item_List} products={datos} />
            </div>
        </div>
    );
}

export default ItemListContainer;

