import Header from '../../components/Header'
import Search from '../../components/Search'
import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';
// import Product from '../Product';
import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Footer from '../../components/Footer';


const Home = () => {
  return (
    <Container fluid={'xxl'}>
      <Header />
      <Search/>
      <Row style={{marginTop: '40px'}}>
        <Sidebar/>
        <Content/>
      </Row>
      <Footer/>
    </Container>
  );
};

export default Home;
