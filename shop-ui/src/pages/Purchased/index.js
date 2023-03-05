import {Container, Col, Row } from 'react-bootstrap';
import Header from '../../components/Header'
import Detail from '../../components/details'
import classNames from 'classnames';


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

        </Row>

      </Container>
      

    </div>
  )  
}

export default Purchased;
