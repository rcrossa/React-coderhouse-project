import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../../../data/index.js';
import ItemList from '../../item_List/index.js';
import { styles } from './style';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        if (categoryId) {
            getProductsByCategory(categoryId)
                .then((data) => setDatos(data))
                .catch((error) => console.warn(error));
        } else {
            getAllProducts()
                .then((data) => setDatos(data))
                .catch((error) => console.warn(error));
        }
    }, [categoryId]);

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

