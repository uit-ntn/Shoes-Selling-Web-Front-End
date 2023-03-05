import classNames from 'classnames/bind'
import {useEffect, useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import Product from '../Product'
import styles from './Content.module.scss'
import productApi from '../../api/productApi'




const cx = classNames.bind(styles)
const arr= [[0,1,2], [3,4]]



function Content(){
  const [list, setList] = useState()
  useState(()=>{
    productApi.getAll()
      .then(res=>{
        setList(res.data.items)
      })
  }, [])
  console.log(list);
  return(
    <Col xxl={9}>
      <Container>
        {arr.map(data=>
          <Row className={cx("Row")}>
            {data.map((item)=>
            <Col>
              <div className={cx("box")}><Product name = {`${!list ? "" : list[item].name}`} price={`${!list ? "" : list[item].max_price}`}/> </div>
              </Col>)}
          </Row>)}
      </Container>

    </Col>
  )
}


export default Content;



