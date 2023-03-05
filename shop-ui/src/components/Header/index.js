import images from '../../assets/images'
import Form from '../Form'
import styles from './Header.module.scss'

import {Container, Row, Col} from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faBell, faCartShopping, faCheckCircle, faHouse, faShoePrints, faX, faXRay} from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState} from 'react';


let login = ""
const cx = classNames.bind(styles)

function Header() {
  const [check, setCheck] = useState(false)
  console.log(check);


  return(
    <Container fluid="xxl" className={cx('wrapper')} >
      <Row className={cx('header')}>
        {/* Logo */}
        <Col xxl={2} className={cx('logo')}>
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
        </Col>

        {/* Search */}
        <Col xxl={6}>
          <Row className={cx("search")}>
            <Col>
              <div>
                <FontAwesomeIcon icon={faHouse} style={{marginRight:'6px'}}/>
                Home
              </div>
            </Col>
            <Col>
              <div>
                <FontAwesomeIcon icon={faCheckCircle} style={{marginRight: '6px'}}/>
                Purcharsed
              </div>
            </Col>
            <Col>
              <div>
                More
                <FontAwesomeIcon icon={faAngleDown} style={{marginLeft: '6px'}}/>
              </div>
            </Col>
          </Row>

        </Col>

        {/* Login */}
        <Col xxl={4} className={cx("login")}>
          <div className={cx("login__item")}>
            <FontAwesomeIcon icon={faCartShopping} className={cx("login__item_notify")}/>
          </div>
          <div className={cx("login__item")}>
            <FontAwesomeIcon icon={faBell} className={cx("login__item_notify")}/>
          </div>
          <div className={cx("login__item")}>
            <button className={cx("login__item_lg")}
              onClick={() => {
                login = "login"
                setCheck(!check)
              }}
            >
              <div className={cx("login__item_btn")}>
                Login
              </div>
            </button>
          </div>
          <div className={cx("login__item")}>
            <button className={cx("login__item_su")}
              onClick={()=>{
                login = "sign up"
                setCheck(!check)
              }}
            >
              <div>
                Sign Up
              </div>
            </button>
          </div>
        </Col>
      </Row>
      {check && 
          <div>
            <FontAwesomeIcon icon={faX}
              onClick={()=> setCheck(!check)}
              style={{position: 'absolute', zIndex: '11', top: '210px', right: '650px'}}
            />
            <Form check={login}/>
          </div>
      }

    </Container>
  )
}

export default Header;
