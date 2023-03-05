import {faHeart, faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import {Row, Col} from 'react-bootstrap';
import styles from './Product.module.scss'



const cx=classNames.bind(styles)

const star = [{},{},{},{}]
const starMax = [{},{},{},{}]

function Product(props) {
  return(
    <div>
      <Row>
        <Col xxl={10}>
          <div className={cx("product__title")}>{props.name}</div>
        </Col>
        <Col xxl={2}>
          <div>
            <FontAwesomeIcon icon={faHeart}/>
          </div>
        </Col>
        <div>
          {star.map(()=>(<FontAwesomeIcon icon={faStar}/>))}
        </div>
      </Row>

      <Row>
        <div className={cx("product__img-box")}>
          <img src={"https://www.shutterstock.com/image-illustration/sports-hightop-sneakers-3d-render-260nw-2076784435.jpg"} alt="ko co anh" 
            className={cx("product__img-img")}
          />
        </div>
      </Row>
      <Row>
        <div className={cx("product__price")}>{props.price}</div>
      </Row>

    </div>
  )
}

export default Product;
