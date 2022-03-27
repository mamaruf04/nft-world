import React from 'react';
import './Product.css'
const Product = (props) => {
    const {Product, handelAddToCard}= props;
    const{img, name, price, seller, ratings}= Product;
    return (
        <div id='product'>
            <img className='product-img' src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() =>handelAddToCard(Product)} className='btn-card'>
                <p className='btn-text'>Add to Cart <i className="fa fa-shopping-cart"></i></p>
            </button>
        </div>
    );
};

export default Product;