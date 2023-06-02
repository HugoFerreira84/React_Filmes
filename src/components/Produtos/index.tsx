import React from "react";
import Navbar from "../Navbar";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

//import css
import './produtos.css'


//import das imagens
import image from './img-prod/img.jpg'
import image1 from './img-prod/img1.webp'
import image2 from './img-prod/img2.jpg'
function index() {
  return (
    <body>
      <Navbar />
      <div className="produtos">
        <Card css={{ w: "500px", h: "400px" }}>
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

        <Card css={{ w: "500px", h: "400px" }}>
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

        <Card css={{ w: "500px", h: "400px" }}>
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
      <div className="prod-2">
      <Card css={{ w: "500px", h: "400px" }}>
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

        <Card css={{ w: "500px", h: "400px" }}>
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

        <Card css={{ w: "500px", h: "400px" }}>
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
      <footer className="footer">
        <p className="footer-by">
          A project by{" "}
          <a
            href="https://twitter.com/erdemmkarakas"
            rel="noopener"
            className="small-link"
          >
            Erdem Karakaş
          </a>
          <a
            href="https://twitter.com/erdemmkarakas"
            rel="noopener"
            target="_blank"
            className="no-link icon-twitter"
            aria-label="Follow me on Twitter"
          ></a>
        </p>
      </footer>
    </body>
  );
}

export default index;
