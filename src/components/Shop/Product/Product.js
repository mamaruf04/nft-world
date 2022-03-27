import React from 'react';
import './Product.css'
const Product = (props) => {
    const {Product, handelAddToCard}= props;
    const{img, name, price}= Product;
    return (
        <div id='product'>
            <img className='product-img' src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() =>handelAddToCard(Product)} className='btn-card'>
                <p className='btn-text'>Add to Cart <i className="fa fa-shopping-cart"></i></p>
            </button>
        </div>
    );
};

export default Product;
