import styles from './Detail.module.scss'
import classNames from 'classnames/bind'
import {Container, Row, Col, Stack} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

const cx=classNames.bind(styles)

function Detail(props){
  const array=["39","40", "41", "42", "45"]
  return(
    <Container className={cx("wrapper")}>

      {/* Name product */}
      <Stack gap={4}>
        <Stack className={cx(["title"])}>
            <div className={cx("title__name")}>Nikae Air Force 1</div>
            <div className={cx("title__price")}>1 600 000 d</div>
        </Stack >


        {/* Size Product */}
        <Stack gap={2} className={cx("wrapper__stack")}>
          <Row>
            <div className={cx("size__title")}>SIZES:</div>
          </Row>
          <Row>
            {array.map((item)=>{
              return(
                <Col style={{position:"relative"}}>
                  <div className={cx("btn__sizes")} >{item}</div>
                </Col>
              )
            })}
          </Row>
        </Stack>

        {/* Quantity product */}
        <Stack className={cx("wrapper__stack")}>
          <Row>
            <Col className={cx("quantity_title")}>
              <div >QUANTITY:</div>
            </Col>
            <Col>
              <div className={cx("quantity__btn")}>
                <input type="text"style={{borderRadius:"0px", border:"1px solid #9ac4cc", padding: "2px"}}/>
                <button className={cx("quantity__btn-item")}>-</button>
                <button className={cx("quantity__btn-item")}>+</button>
              </div>
            </Col>
          </Row>

        </Stack>

        {/* other product */}
        <Stack className={cx("wrapper__stack")}>
          <Row>
            <Col className={cx("quantity_title")}>
              <div >COLOR:</div>
            </Col>
            <Col>
              <div className={cx("color__chose")}>
                <div className={cx("color__chose-box")}>
                  <FontAwesomeIcon icon={faChevronDown}
                    style={{paddingRight: "8px"}}
                  />
                  While
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{marginTop: "20px"}}>
            <button className={cx("addToCart")}>ADD TO CART</button>
          </Row>

          <Row>
            <Stack gap={2}>
              <div className={cx("quantity_title")}>DETAIL:</div>
              <div>
                <p>The shoes are sold in 5 different styles: super low, low, mid, high, and super high. The mid comes with a connected strap.</p>
                <p>The medallion is engraved with the inscription "AF-1", with the year "'82" inscribed beside it, and has historically been made out of a silver-colored metal</p>
              </div>

            </Stack>

          </Row>
        </Stack>
      </Stack>
    </Container>
  )
}


export default Detail;
