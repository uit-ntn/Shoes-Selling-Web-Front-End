
import styles from './imProduct.module.scss'
import classNames from 'classnames/bind'
import {Container, Row, Col, Stack} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleArrowLeft, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'

const cx=classNames.bind(styles)


function ImgProduct(props){
  const img = props.img
  return(
    <Container className={cx("wrapper")}>
      <Stack gap={2} >
        <div>
          <Row>
            <Col xxl={2}>
              <div className={cx("img_btn")}>
                <FontAwesomeIcon icon={faCircleArrowLeft} className={cx("img_btn-clk")}
                />
              </div>

            </Col>
            <Col xxl={8}>
              <div className={cx("ip_img")}>
                <img src={(img[0][0])} alt=""/>

              </div>
            </Col>
            <Col xxl={2}>
              <div className={cx("img_btn")}>
                <FontAwesomeIcon icon={faCircleArrowRight} className={cx("img_btn-clk")}/>
              </div>

            </Col>
          </Row>
        </div>
        <div style={{marginTop: "20px"}}>
          <Row>
              <Col></Col>
              {img[0].map((item)=>{
                return(
                  <Col>
                    <div>
                      <img src={item} alt="" style={{width: "80px", height: "60px"}}/>
                    </div>
                  </Col>
                )
              })}
              <Col></Col>
          </Row>
        </div>

      </Stack>
    </Container>
  )
}


export default ImgProduct;
