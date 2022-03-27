import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Faq from '../Faq/Faq';
import '../Shop/Shop.css'
import Product from './Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('https://my-json-server.typicode.com/mamaruf04/mockjson/posts')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handelAddToCard = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product
                         key={product.id}
                         Product={product}
                         handelAddToCard = {handelAddToCard}
                    ></Product>)
                    
                }
                <Faq></Faq>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;