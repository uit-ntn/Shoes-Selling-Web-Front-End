import {faShoePrints} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import {Container, Row, Col, Stack} from 'react-bootstrap';
import styles from './Footer.module.scss'
import images from '../../assets/images';


const cx=classNames.bind(styles)

function Footer(){
  return(
    <Container 
      style={{
        backgroundImage:`url(${images.backgroundFooter})`,
        backgroundSize:'cover'

      }}
    >
      <Row className={cx("logo")}>
        {/* Logo */}
        <Col>
          <div style={{display: 'inline-flex', justifyContent:'center'}}>
            <Stack direction="horizontal">
              <div className={cx('logo__images')}>
                <FontAwesomeIcon icon={faShoePrints}
                  style={{
                    padding: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#51d6ed',
                    color: 'white'
                  }}
                />
              </div>
              <div className={cx("logo__title")}>
                <div style={{fontSize: '20px', fontWeight: '500'}}>SHOE SELLING</div>
                <div style={{fontStyle: 'italic', fontSize: '10px', }}>-SINCE 2023-</div>
              </div>
            </Stack>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className={cx("title")}>CONTACT WITH US</div>
          <div className={cx("info")}>Đông Hòa, Dĩ An, Bình Dương, Việt Nam</div>
          <div className={cx("info")}>Phone: +84 123 1234 123</div>
          <div className={cx("info")}>Email: Example@emxample.com</div>
          <div className={cx("info")}>Phone: 5am-8pm PT Mon-Fri, Closed Sat/Sun</div>
        </Col>
        <Col>
          <div className={cx("title")}>SEND US FEED BACK</div>
          <Row>
              <Col xxl={2}></Col>
              <Col>
                <Col>
                  <input type="text" style={{paddingRight:'2px', marginBottom: '10px'}} placeholder="   Name"/>
                  <input type="text" placeholder='   Email'/>
                </Col>
                <Col style={{padding:'0 15px'}}><input type="text" style={{width:'100%'}} placeholder= "   Message"/></Col>
              </Col>
              <Col xxl={2}></Col>
          </Row>
          <div></div>

        </Col>
      </Row>
      <Row className={cx("icon")}>
        {/* <FontAwesomeIcon icon="fa-brands fa-twitter"/> */}
        {/* <FontAwesomeIcon icon="fa-brands fa-facebook"/> */}
        {/* <FontAwesomeIcon icon="fa-brands fa-youtube"/> */}
        {/* <FontAwesomeIcon icon="fa-brands fa-instagram"/> */}
        {/* <FontAwesomeIcon icon="fa-brands fa-tiktok"/> */}

      </Row>
    </Container>
  )
}


export default Footer;
