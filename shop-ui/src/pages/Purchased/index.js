
import {Container, Col, Row } from 'react-bootstrap';
import Header from '../../components/Header'
import Detail from '../../components/details'
import classNames from 'classnames';
import Footer from '../../components/Footer';


const cx=classNames.bind()
function Purchased() {
  return(
    <div>
      <Header/>
      <Container fluid={"xxl"} className={cx("wrapper")}>
        <Row >
          <Detail/>
        </Row>
        <Row>
          <Footer/>
        </Row>
      </Container>
      

    </div>
  )  
}
main

  return (
    <div>
      <PurchasedProductsList purchasedProducts={purchasedProducts} />
    </div>
  );

export default Purchased;
