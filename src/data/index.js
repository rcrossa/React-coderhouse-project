import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

export const products = [
    {
        id: 1,
        pictureUrl: `${img1}`,
        title: 'Producto 1',
        description: 'Producto 2',
        price: 100,
        stock: 1,
    },
    {
        id: 2,
        pictureUrl: `${img2}`,
        title: 'Producto 2',
        description: 'Producto 3',
        price: 100,
        stock: 1,
    },
    {
        id: 3,
        pictureUrl: `${img3}`,
        title: 'Producto 2',
        description: 'Producto 3',
        price: 100,
        stock: 1,
    },
    {
        id: 4,
        pictureUrl: `${img4}`,
        title: 'Producto 2',
        description: 'Producto 3',
        price: 100,
        stock: 1,
    }
]

export const getProducts = () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(products);
        }, 2000);
    })
    return promise;
}

export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
        const result = products.find((product) => product.id === id)
        setTimeout(() => {
            return resolve(result);
        }, 2000);
    })
    return promise;
}