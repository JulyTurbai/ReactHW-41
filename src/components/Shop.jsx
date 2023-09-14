import './../styles/components/shop.scss';
import Products from './Products';

const Shop = () => {
    return (
        <div className="shop">
            <div className="shop__top">
                <h3>Products</h3>
                <hr />
            </div>
            <div className="shop__content">
                <Products />
            </div>
        </div>
    );
};

export default Shop;