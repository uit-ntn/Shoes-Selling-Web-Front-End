import React from 'react';
import Product from '../../pages/Product';

const ProductList = (props) => {
  const products = props.products.map((product) => (
    <Product
      key={product.id}
      name={product.name}
      image={product.image}
      price={product.price}
    />
  ));

  return <div>{products}</div>;
};

export default ProductList;