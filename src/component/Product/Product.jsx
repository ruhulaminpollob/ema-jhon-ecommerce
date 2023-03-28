import React from 'react';

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product
    const handlerAddToCart=props.handlerAddToCart
    return (
        
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <br />
                <p>Manufacturer: {seller}</p>
                <p>Ratting: {ratings} star</p>
            </div>
            <div className="card-footer rounded-b-md bg-orange-200 hover:bg-orange-300 hover:text-white p-3 text-center font-bold">
                <button onClick={()=>handlerAddToCart()}>Add to Cart</button>
            </div>
        </div>
        
    );
};

export default Product;