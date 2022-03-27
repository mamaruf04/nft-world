import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}= props;

    // const[item,setItem] = useState([]);

    let newProducts = [];
    for(const product of cart){
        newProducts = [...newProducts, product] ;
        if(newProducts.length > 4){
            alert("You can add max 4 NFT");
        }
            
    }
    const [randomProduct, setRandomProduct] = useState([])
    const RandomProduct = () =>{
        let random = Math.floor((Math.random() * 4));
        let y = newProducts[random];
        // randomProduct +;
        setRandomProduct(y);   
    }
    const clearState = () => {
        newProducts = []
        setRandomProduct([]);   
    }
    return (
        <div className='cart'>
            <h3>Selected NFT</h3>
            {
                newProducts.map(product =>
                     <div key={product.id} className='cart-img'>
                         <img width='40px' height='40px' src={product.img} alt="" />
                         <p>{product.name}</p>
                     </div>)
            }
            <button onClick={() => RandomProduct()}>CHOOSE 1 FOR ME</button>
            <h3 key={randomProduct.id} className='cart-img'>
                <img width='40px' height='40px' src={randomProduct.img} alt="" />
                <p>{randomProduct.name}</p>
            </h3>
            <button onClick={() => clearState()}>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;