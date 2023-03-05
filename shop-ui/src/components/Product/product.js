import React from 'react';
import './Product.css';

const Product = (props) => {
  const { name, price, image } = props;

  return (
    <div className="Product">
      <img className="Product-image" src={image} alt={name} />
      <div className="Product-info">
        <h3 className="Product-name">{name}</h3>
        <p className="Product-price">{price}</p>
      </div>
    </div>
  );
};

export default Product;