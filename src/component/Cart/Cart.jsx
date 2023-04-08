import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total=0;
    let totalShipping=0;
    cart.forEach(price => {
        total=total + price.price;
        totalShipping=totalShipping + price.shipping;
    });
    const tax=(total * 0.15);
    const grandTotal=(total + totalShipping) - tax;
    return (
        <div>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:$ {total}</p>
            <p>Total Shipping Charge:$ {totalShipping}</p>
            <p>Tax:$ {parseFloat(tax.toFixed(2))}</p>
            <h4 className='text-2xl'>Grand Total:$ {grandTotal}</h4>
        </div>
    );
};

export default Cart;