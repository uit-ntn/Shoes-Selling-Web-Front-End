import React from 'react';
import './ProductList.css';
import Product from './Product';

const ProductList = (props) => {
  const { products } = props;

  return (
    <div className="ProductList">
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;