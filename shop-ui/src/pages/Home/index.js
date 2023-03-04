import Header from '../../components/Header'
import Product from '../Product';
import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import React from 'react';
import Product from './Product';

const Home = () => {
  return (
    <div>
    <Header />
      <Product
        name="Adidas"
        image=""
        price="2000"
      />
      <Product
        name="Nike"
        image=""
        price="2000"
      />
      <Footer/>
    </div>
  );
};

export default Home;
