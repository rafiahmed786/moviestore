import React from 'react';
import './cart.css'

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    for(const product of cart){
        total = total + product.price;
    }

    return (
        <div className='cart'>
            <h3>Total Movies Added: {cart.length} </h3>
            {
                props.cart.map(product=> <p>{product.name}</p> )
            }
            <h4>Total Price: {total}</h4>
        </div>
    );
};

export default Cart;