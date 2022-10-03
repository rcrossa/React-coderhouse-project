import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/5.png';
import img5 from '../assets/6.png'

const products = [
    { id: 1, pictureUrl: `${img1}`, category: 'tortas', title: 'Lemon Pie', description: 'Lemon pie', price: 100, stock: 1, },
    { id: 2, pictureUrl: `${img2}`, category: 'tortas', title: 'Brownie', description: 'Brownie', price: 100, stock: 1, },
    { id: 3, pictureUrl: `${img3}`, category: 'tortas', title: 'Tarta', description: 'Tarta de frutos', price: 100, stock: 1, },
    { id: 4, pictureUrl: `${img4}`, category: 'galletitas', title: 'Galletitas', description: 'Pepas', price: 100, stock: 1, },
    { id: 5, pictureUrl: `${img5}`, category: 'alfajores', title: 'Alfajores', description: 'Alfajores de coco con dulce de leche', price: 100, stock: 1, }
]

export const getAllProducts = () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(products);
        }, 2000);
    })
    return promise;
}

export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
        const result = products.find((product) => product.id === parseInt(id))
        setTimeout(() => {
            return resolve(result);
        }, 2000);
    })
    return promise;
}

export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
        const results = products.filter((product) => product.category === categoryId);
        setTimeout(() => {
            return resolve(results);
        }, 2000);
    })
    return promise
}