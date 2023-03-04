import React, { Component } from 'react';

import React from 'react';

const Product = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.price}</p>
    </div>
  );
};

export default Product;