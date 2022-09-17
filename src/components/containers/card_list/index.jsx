import React from 'react';
import { Card } from '../../../models/card';
import CardComponent from '../../pure/card';
import { styles } from './style.js';

const CardListComponent = () => {
    const defaultCard = new Card('Reloj', 'Reloj de prueba');
    return (
        <div style={styles.section}>
            <div style={styles.container}>
                <h1 style={styles.h1}>
                    Tienda
                </h1>
                <div style={styles.component}>
                    <CardComponent card={defaultCard} />
                </div>
            </div>
        </div>
    );
};


CardListComponent.propTypes = {

};


export default CardListComponent;
