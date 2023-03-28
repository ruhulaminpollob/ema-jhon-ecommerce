import { data } from 'autoprefixer';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Shop = () => {

    const [products,useProducts]=useState([]);
    useEffect(()=>{
        fetch('../../../public/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>useProducts(data))
    },[])
    return (
        <section className='product-container grid grid-cols-5'>
        <div className="products col-span-4">
            <h1>all product shows here {products.length}</h1>
        </div>
        <div className="cart">
            <h1>products over view here </h1>
        </div>

      </section>
    );
};

export default Shop;