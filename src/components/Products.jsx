import './../styles/components/products.scss'
import Product from './Product';
import { useState, useEffect } from 'react';
import './../styles/components/modal.scss';

const url = {
    products: 'http://localhost:3000/products',
    categories: 'http://localhost:3000/categories'
}
const Products = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
    fetch(url.products)
        .then(res => res.json())
        .then(data => setProducts(data));
}, [])

    return (
        <div className="products">
            {
                !products.length
                ? <h2>Loading...</h2> 
                : products.map(product => <Product key={ product.id }product={ product }/>)
            }
        </div>
    );
};

export default Products;