import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
        // setCart([product]);
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
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;