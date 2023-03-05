import Header from '../../components/Header'
import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import React from 'react';
import Product from '../../components/Product'
import ProductList from '../../components/productList';
import Slidebar from '../../components/Slidebar';

const ListComponent = () => {
  const products = [
    {
      name: 'Nike',
      price: '1000000',
      image: '',
    },
    {
      name: 'Adidas',
      price: '2000000',
      image: '',
    },
    
  ];

  return <ProductList products={products} />; //tạo danh sách các sản phẩm hiển thị dưới dạng lưới
};

const Home = () => {
  return (
   
      <Header />


  );
};

export default Home;
