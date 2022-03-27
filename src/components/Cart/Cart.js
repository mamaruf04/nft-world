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
        console.log(newProducts[2]?.name);    
    }
    // const randomProduct = '';
    // const x = () =>{
    //     // let random = Math.floor((Math.random() * 4));
    //     {newProducts[2].name} = randomProduct;
    //     console.log(randomProduct);
    // }
    
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
            {/* <button onClick={x}>CHOOSE 1 FOR ME</button> */}
            <button>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;