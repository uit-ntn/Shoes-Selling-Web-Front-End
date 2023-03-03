import {faShoePrints, faX} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import {useEffect, useState} from 'react';
import {Container, Row, Col, Stack} from 'react-bootstrap';
import styles from './Form.module.scss'


const cx = classNames.bind(styles)
function Form(props) {
  
  return( 
    !(props.check ==="") &&
    <Container className={cx("wrapper")}>
      <Row style={{marginTop: '200px'}}>
        <Col xxl={3}></Col>


        <Col>
          <div className={cx("form")}>
            {/* Logo */}
            <div className={cx("form__logo")}>
              <Row>
                <Col xxl={3}>
                  <div className={cx("fomr__logo_img")}> 
                    <FontAwesomeIcon icon={faShoePrints}
                      style={{
                        padding: '10px',
                        borderRadius: '50%',
                        backgroundColor: '#51d6ed',
                        color: 'white',
                        fontSize: '30px'
                      }}
                    />
                  </div>
                </Col>
                <Col xxl={9}>
                  <div className={cx("fomr__logo_title")}>
                    <div style={{fontSize: '30px', fontWeight: '500',height:'32px'}}>SHOE SELLING</div>
                    <div style={{fontStyle: 'italic', fontSize: '16px',}}>-SINCE 2023-</div>
                  </div>
                </Col>
              </Row>
              <div></div>
            </div>

            {/* content */}
            <div className={cx("form__content")}>
              {(props.check==="login")&&
                <div className={cx("form__content-login")}>
                  <div className={cx("form__name")}>CREATE AN ACCOUNT</div>
                  <div className={cx("form__content-box")}>
                    <div>Your Name</div>
                    <input type="text"/>
                  </div>
                  <div className={cx("form__content-box")}>
                    <div>EMAIL</div>
                    <input type="text"/>
                  </div>
                  <div className={cx("form__content-box")}>
                    <div>PASSWORD</div>
                    <input type="text"/>
                  </div>
                </div> }
              {(props.check==="sign up")&& 
                <div>
                  <div className={cx("form__name")}>YOUR ACCOUNT</div>
                  <div className={cx("form__content-box")}>
                    <div>EMAIL</div>
                    <input type="text"/>
                  </div>
                  <div className={cx("form__content-box")}>
                    <div>PASSWORD</div>
                    <input type="text"/>
                  </div>
                </div> }


            </div>
            {/* login */}
            <div className={cx("form__login")}>
              {(props.check === "sign up") ? 
                <div className={cx("form__login-choice")}>Sign Up</div> :
                <div className={cx("form__login-nChoice")}>Sign Up</div>
              }
              {(props.check === "login") ? 
                <div className={cx("form__login-choice")}>Login</div> :
                <div className={cx("form__login-nChoice")}>Login</div>
              }

            </div>
          </div>
        </Col>


        <Col xxl={3}></Col>        
      </Row>
    {/* <div> */}
    {/*   {(check=="login") && <div>Form dang nhap</div> } */}
    {/*   {(check=="sign up") && <div>Form dang ky</div>} */}
    {/* </div> */}
    </Container>
  )
}

export default Form;
