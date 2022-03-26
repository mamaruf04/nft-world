import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}= props;

    // let products = [];
    for(const product of cart){
        // newProduct = [...newProduct,product] ;
        // console.log(product);
        // newProduct = [...newProduct, product] ;
        console.log(product);
    }
    return (
        <div className='cart'>
            <h3>Selected NFT</h3>
            {/* <p>{product.name}</p> */}
            <button>CHOOSE 1 FOR ME</button>
            <button>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;