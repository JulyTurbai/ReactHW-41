import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './../styles/components/product.scss';
import { useState } from 'react';




const Product = ({ product }) => {
    
    const {id, title, img, description:full, price, category} = product;
    
    const [productId, setProductId] = useState(id);
    const [response, setResponse] = useState('');

    const handleAddToCart = () => {
        const data = { productId };
        fetch('http://localhost:3000/cart', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            setResponse(data);
          })
          .catch((error) => {
            console.error('Помилка:', error);
          });
    };


    const createModalWindow = () => {
        document.querySelector('.descr').classList.remove('none');
        document.querySelector('.descr').innerHTML = '';
    
    let str = `
                <div className='modal' style="width: 300px; height:400px; background-color: white; 
                    padding: 20px; text-align: center;">
                    <div className="modal__img" style="margin-bottom: 20px">
                        <img style="width:200px" src=${ product.img } alt="" />
                    </div>
                    <div className="modal__info">
                        <p>${ product.description.full }</p>
                    </div>
                </div>`
        
        document.querySelector('.descr').innerHTML = str;
        
    }
    
    return (
        <div className="product" id={ id }>
            <div className="product__thumbnail">
                <img onClick={() =>createModalWindow()} src={ img } alt={ title } />
            </div>
            <h4 className='product__title'>{ title }</h4>
            <div className="product__price-block">
                <div className="product__price">
                    <span>{ price.value }</span>
                </div>
                <button className='product__btn-buy' onClick={() => handleAddToCart()}>
                    <FontAwesomeIcon icon={faCartPlus} />
                </button>
            </div>
        </div>
    );
};

export default Product;