import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Scholar from '../Scholar/Scholar';
import './Person.css';

const Person = () => {
    const [persons, setPersons] = useState([]);
    const [cart, setCart] = useState([]);
//Data Load section=========
    useEffect(() => {
        fetch('./persons.JSON')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, []);

//Add Cart Section=======
    const handleAddToCart = (person) => {
        const newCart = [...cart, person];
        const uniq = [...new Set(newCart)];
        setCart(uniq);
    }

    return (  
        <div className="person-container">
            <div className="scholar-container">
            {
                persons.map(person => <Scholar
                    key = {person.id}
                    person = {person}
                    handleAddToCart={handleAddToCart}
                >
                </Scholar>
                )
            }
            </div>   
            <div className="cart-container">
                 <Cart cart={cart}></Cart>
            </div>      
        </div>
    );
};

export default Person;