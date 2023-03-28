import React from 'react';

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product
    console.log(props.product);
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
            <div className="card-footer rounded-b-md bg-orange-200 p-3 text-center font-bold">
                <h4>Add to Cart</h4>
            </div>
        </div>
        
    );
};

export default Product;