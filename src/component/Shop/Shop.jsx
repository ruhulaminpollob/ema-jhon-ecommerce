import { data } from 'autoprefixer';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {

    const [products,useProducts]=useState([]);
    useEffect(()=>{
        fetch('../../../public/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>useProducts(data))
    },[])
    return (
        <section className='product-container grid grid-cols-5'>
        <div className="products col-span-4 grid grid-cols-3 gap-3 p-10">
            {
                products.map(product=> <Product product={product} key={product.id}></Product>)
            }
        </div>
        <div className="cart">
            <h1>products over view here </h1>
        </div>

      </section>
    );
};

export default Shop;