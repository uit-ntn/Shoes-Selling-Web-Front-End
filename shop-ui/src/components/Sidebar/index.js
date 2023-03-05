import classNames from 'classnames/bind'
import {Container, Row, Col, Stack} from 'react-bootstrap'
import styles from './Sidebar.module.scss'



const cx = classNames.bind(styles)

const array = [
  {
    name: 'SIZES',
    value: ["34-36", "36-39", "40-43", "44-47", "47..."]
  },
  {
    name: 'PRICE',
    value: ["$100 - $150", "$150-$200", "$200-$250", "$250-$400"]
  },
  {
    name: 'BRAND',
    value: ["NIKE", "ADIDAS", "PUMA", "VANS"]
  },
  {
    name: 'COLOR',
    value: ["White", "Blue", "Red", "Yellow"]
  }
]

function Sidebar(){
  return(
        <Col xxl = {3}>
          <Stack gap={4}>
            {array.map((item)=>{
              return(
              <div className={cx(["box"])}>
                <div className={cx("box__title")}>{item.name}</div>
                {item.value.map((item)=>{
                  return(
                    <Row>
                      <Col xxl={2}></Col>
                      <Col xxl={6} >
                        <label className={cx("container")}>{item}
                          <input type="checkbox" />
                          <span className={cx("checkmark")}></span>
                        </label>
                      </Col>
                      <Col xxl={4}></Col>
                    </Row>
                  )
                })}
              </div>
              )
            })}


          </Stack>
        </Col>
  )

}


export default Sidebar
