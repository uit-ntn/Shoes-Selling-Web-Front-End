import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import images from '../../assets/images'
import {Container, Row, Col, Placeholder} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLockOpen, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'





const cx = classNames.bind(styles)


function Search(){
  return(
    <Container style={{height:"300px", backgroundImage:`url(${images.background})`, backgroundSize: 'cover'}}>
      <Row>
        <div className={cx("search__title")}>Everything you need!</div>
      </Row>
      <Row>
        <div className={cx("search__src")}>
          <input type="text" className={cx("search__src-inp")} Placeholder="  Search for shoes"/>
          <div className={cx("search__src-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </div>
        </div>

      </Row>
    </Container>
  )
}


export default Search;
