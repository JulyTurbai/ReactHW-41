import './../styles/components/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const url = {
    cart: 'http://localhost:3000/cart',
}

const Header = () => {
    
const [cart, setCart] = useState('');

useEffect(() => {
    fetch(url.cart)
        .then(res => res.json())
        .then(data => setCart(data));
}, [])
    return (
        <div className="header">
            <h2 className='header__title'>My Shop</h2>
            <div className='header__cart'>
                <FontAwesomeIcon icon={faCartPlus} />
                <div className="header__cart info">
                    { cart.length }
                </div>
            </div>
        </div>
    );
};

export default Header;