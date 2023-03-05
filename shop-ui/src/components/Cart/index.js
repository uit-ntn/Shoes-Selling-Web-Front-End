import React from 'react';
import './Cart.css';

const Cart = ({ items, total }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </div>
        </div>
      ))}
      <div className="total">
        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
};

export default Cart;