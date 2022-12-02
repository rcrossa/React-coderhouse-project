import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../../../data/index.js';
import ItemList from '../../item_List/index.js';
import { styles } from './style';

const ItemListContainer = () => {
    const { categoryName } = useParams();
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        console.log(categoryName);
    }, [categoryName]);

    useEffect(() => {
        getAllProducts()
            .then((products) => setDatos(products))
            .catch((error) => console.warn(error));
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

