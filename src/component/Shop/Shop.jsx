import { data } from 'autoprefixer';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';


const Shop = () => {

    const [products, useProducts] = useState([]);

    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('../../../public/fakeData/products.json')
            .then(res => res.json())
            .then(data => useProducts(data))
    }, [])



    const handlerAddToCart = (item) => {


        const newCart = [...cart, item]
        setCart(newCart)


    };
    return (
        <section className='product-container grid grid-cols-5'>
            <div className="products col-span-4 grid grid-cols-3 gap-3 p-10">
                {
                    products.map(product => <Product product={product} handlerAddToCart={handlerAddToCart} key={product.id}></Product>)
                }
            </div>
            <div className="cart my-5 bg-orange-200 p-3 rounded">
                <div className=' sticky top-0'>
                    <h1 className='text-3xl'>Order Summary</h1>
                    <div className=' mt-10'>
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Shop;