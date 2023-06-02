import Navbar from "../Navbar";
import { Card, Col, Row, Text } from "@nextui-org/react";

//import css
import './galeria.css'


//import das imagens
import image from './img-prod/img.jpg'
import image1 from './img-prod/img1.webp'
import image2 from './img-prod/img2.jpg'

function Galeria() {
  return (
    <body>
      <Navbar />

      <div className="titulo">
        <h1>Galeria</h1>
      </div>
      <div className="galeria">
        <Card css={{ w: "500px", h: "700px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
             
              </Text>
              <Text h3 color="black">
          
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={image}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={20}>
                  A grande Muralha
                </Text>
                <Text color="#000" size={12}>
             
                </Text>
              </Col>
              <Col>
                
              </Col>
            </Row>
          </Card.Footer>
        </Card>

        <Card css={{ w: "500px", h: "700px"}}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                
              </Text>
              <Text h3 color="black">
             
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={image1}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={20}>
                  Jumange
                </Text>
                <Text color="#000" size={12}>
               
                </Text>
              </Col>
              <Col>
                
              </Col>
            </Row>
          </Card.Footer>
        </Card>

        <Card css={{ w: "500px", h: "700px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={20} weight="bold" transform="uppercase" color="#ffffffAA">
         
              </Text>
              <Text h3 color="black">
             
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={image2}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={20}>
               No Limite do Amanha
                </Text>
                <Text color="#000" size={12}>
         
                </Text>
              </Col>
              <Col>
                
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        
      </div>
      <div className="galeria">
      <Card css={{ w: "500px", h: "700px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
             
              </Text>
              <Text h3 color="black">
          
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={image}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={20}>
                  A grande Muralha
                </Text>
                <Text color="#000" size={12}>
             
                </Text>
              </Col>
              <Col>
                
              </Col>
            </Row>
          </Card.Footer>
        </Card>

        <Card css={{ w: "500px", h: "700px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                
              </Text>
              <Text h3 color="black">
             
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={image1}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={20}>
                  Jumange
                </Text>
                <Text color="#000" size={12}>
               
                </Text>
              </Col>
              <Col>
                
              </Col>
            </Row>
          </Card.Footer>
        </Card>

        <Card css={{ w: "500px", h: "700px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={20} weight="bold" transform="uppercase" color="#ffffffAA">
         
              </Text>
              <Text h3 color="black">
             
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={image2}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={20}>
               No Limite do Amanha
                </Text>
                <Text color="#000" size={12}>
         
                </Text>
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

export default Galeria;
