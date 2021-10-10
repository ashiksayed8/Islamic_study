import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let  totalCount = 0;
    let total = 0;
    for (const person of cart) {
        if (!person.length) {
            person.length = 1;
        }
        totalCount = totalCount + person.length;
        total = total + person.salary;
    }
    return (
        <div className = "cart">
            <h1><i class="fas fa-user-plus"></i>Add Islamic Scholar: {totalCount}</h1>
            <h2>Total Cost: ${total}</h2>
            {
                cart.map(person => <li>{person.name}</li>)
            }
        </div>
    );
};

export default Cart;