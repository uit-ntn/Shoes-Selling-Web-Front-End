import {Container, Row, Col} from 'react-bootstrap'
import Detail from './detail'
import ImgProduct from './imgProduct'



const data=[
  {
    name: "Nike Air Force 1",
    price: 1650000,
    img:
    [
      "https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg",
      "https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg",
      "https://pyxis.nymag.com/v1/imgs/388/cda/a896a62ed3f7e2b9b36230ea5617f8abcd-11---.rsquare.w600.jpg",
    ],
    size: ["39","40", "41", "42", "43"],
    color: ["while", "black"]
  },
  {
    name: "Nike Air Max 90 GTX shoe",
    price: "160$",
    img:
    [
      "https://media.gq.com/photos/63e2b8431ff05e504d450057/master/w_1280,c_limit/Nike-Air-Max-90-GTX-shoes.png",
      "https://media.gq.com/photos/63e2b8431ff05e504d450057/master/w_1280,c_limit/Nike-Air-Max-90-GTX-shoes.png",
      "https://media.gq.com/photos/63e2b8431ff05e504d450057/master/w_1280,c_limit/Nike-Air-Max-90-GTX-shoes.png"
    ],
    size: ["39","43", "44", "45", "46"],
    color: ["while", "black"]
  },
  {
    name: "Nike \"Blaze\" mid \'77 vintage sneakers",
    price: "100$",
    img:
    [
      "https://media.gq.com/photos/61019f090bf452849a346d63/master/w_1280,c_limit/Nike-Blazer-mid-'77-vintage-sneakers.jpg",
      "https://media.gq.com/photos/61019f090bf452849a346d63/master/w_1280,c_limit/Nike-Blazer-mid-'77-vintage-sneakers.jpg",
      "https://media.gq.com/photos/61019f090bf452849a346d63/master/w_1280,c_limit/Nike-Blazer-mid-'77-vintage-sneakers.jpg"
    ],
    size: ["39","40", "41", "42", "43"],
    color: ["while", "gray"]
  }
]


function Details(){
  const abc = data.map((item)=>{return item.img})
  return (
    <Container style={{borderTop:"3px solid #a3eaf6 ", marginTop: "10px", paddingTop: "60px", minHeight: '1200px'}}>
      <Row>
        <Col>
          <ImgProduct img={abc}/>

        </Col>
        <Col>
          <Detail name={data.item} price={data.price} size={data.size} color={data.color}/>
        </Col>
      </Row>

    </Container>

  )

}

export default Details;
