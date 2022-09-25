import React from 'react';
import ItemCard from '../item_Card';

const Item_List = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <ItemCard key={product.id} product={product} />

            ))}
        </>
    );
}

export default Item_List;
