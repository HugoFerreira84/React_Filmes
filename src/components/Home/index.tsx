import Navbar from "../Navbar";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, Col, Row, Text } from "@nextui-org/react";

import './home.css'

//import das imagens
import image from '../../img/img-1.jpg';
import image1 from '../../img/img2.jpg';
import image2 from '../../img/img3.jpg';
import image3 from '../../img/img4.jpg';
import image4 from '../../img/img5.jpg';
import image5 from '../../img/img6.jpeg';


//import das imgens dos cards
import img from './img-card/img-1.jpg'
import img1 from './img-card/img-2.jpg'
import img2 from './img-card/img-3.jpg'



function Home() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <body>

      <Navbar />

      <Slider {...settings}>
        <div>
          <img src={image} alt={'primeira imgem'} style={{ width: '100%', height: '700px' }} />
        </div>
        <div>
          <img src={image1} alt={'primeira imgem'} style={{ width: '100%', height: '700px' }} />
        </div>
        <div>
          <img src={image2} alt={'primeira imgem'} style={{ width: '100%', height: '700px' }} />
        </div>
        <div>
          <img src={image3} alt={'primeira imgem'} style={{ width: '100%', height: '700px' }} />
        </div>
        <div>
          <img src={image4} alt={'primeira imgem'} style={{ width: '100%', height: '700px' }} />
        </div>
        <div>
          <img src={image5} alt={'primeira imgem'} style={{ width: '100%', height: '700px' }} />
        </div>
      </Slider>

      <div className="titulo">
        <h1>Filmes em Alta</h1>
      </div>

      <div className="cards">
        <Card css={{ w: "570px", h: "1000px", mt: "50px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">

              </Text>
              <Text h3 color="white">

              </Text>
            </Col>

          </Card.Header>
          <Card.Body css={{ p: 0}}>
            <Card.Image
              src={img}
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body> 
        
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              height:150,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col span={1}>
                    
                  </Col>
                  <Col>
                    <Text color="#d1d1d1" size={21}>
                      &nbsp;Avengers Age of Ultron
                    </Text>
                    <Text color="#d1d1d1" size={12}>

                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>

              </Col>
            </Row>
          </Card.Footer>
        </Card>

        <Card css={{ w: "570px", h: "1000px", mt: "50px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">

              </Text>
              <Text h3 color="white">

              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={img1}
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              height:150,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col span={1}>
                    
                  </Col>
                  <Col>
                    <Text color="#d1d1d1" size={20}>
                      &nbsp;Guardians of the Galaxy
                    </Text>
                    <Text color="#d1d1d1" size={12}>

                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>

              </Col>
            </Row>
          </Card.Footer>
        </Card>

        <Card css={{ w: "570px", h: "1000px", mt: "50px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">

              </Text>
              <Text h3 color="white">

              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={img2}
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              height:150,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col span={1}>
                    
                  </Col>
                  <Col>
                    <Text color="#d1d1d1" size={21}>
                      &nbsp;Avengers End Game
                    </Text>
                    <Text color="#d1d1d1" size={12}>

                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>

              </Col>
            </Row>
          </Card.Footer>
        </Card>

      </div>


      <footer>
        <div>
          <h4>Contato</h4>
          <p>Email: contato@example.com</p>
          <p>Telefone: (00) 1234-5678</p>
        </div>

        <div>
          <h4>Endereço</h4>
          <p>Rua Exemplo, 123</p>
          <p>Cidade, Estado</p>
        </div>

        <div>
          <h4>Redes Sociais</h4>
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.twitter.com">Twitter</a>
          <a href="https://www.instagram.com">Instagram</a>
        </div>

        <div>
          <h4>Horário de Funcionamento</h4>
          <p>Segunda a Sexta: 9h às 18h</p>
          <p>Sábado: 9h às 12h</p>
        </div>

        <div>
          <h4>Políticas</h4>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>

        <div>
          <h4>Newsletter</h4>
          <p>Assine nossa newsletter para receber novidades.</p>
          <form>
            <input type="email" placeholder="Seu email" required/>
              <button type="submit">Assinar</button>
          </form>
        </div>
      </footer>

    </body>
  );
}

export default Home;
