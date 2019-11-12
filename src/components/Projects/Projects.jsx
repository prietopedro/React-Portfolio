


import React from 'react'
import {
    Button,
    Container,
    Row,
    Col,
    UncontrolledCarousel
  } from "reactstrap";

export default function Projects() {
    const carouselItems = [
        {
          src: require("../../assets/img/denys.jpg"),
          altText: "Slide 1",
          caption: "Big City Life, United States"
        },
        {
          src: require("../../assets/img/fabien-bazanegue.jpg"),
          altText: "Slide 2",
          caption: "Somewhere Beyond, United States"
        },
        {
          src: require("../../assets/img/mark-finn.jpg"),
          altText: "Slide 3",
          caption: "Stocks, United States"
        }
      ];
    return (
        <div className="section">
        <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
                <Col md="5">
                <h1 className="profile-title text-left">Coming Soon.</h1>
                <h5 className="text-on-back">01</h5>
                  <p className="profile-description text-left">
                    An artist of considerable range, Ryan — the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  <div className="btn-wrapper pt-3">
                    <Button
                      className="btn-simple"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-book-bookmark" /> Bookmark
                    </Button>
                    <Button
                      className="btn-simple"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-bulb-63" /> Check it!
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container>
              <Row className="justify-content-between">
                <Col md="5">
                <h1 className="profile-title text-left">Coming Soon.</h1>
                <h5 className="text-on-back">02</h5>
                  <p className="profile-description text-left">
                    An artist of considerable range, Ryan — the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  <div className="btn-wrapper pt-3">
                    <Button
                      className="btn-simple"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-book-bookmark" /> Bookmark
                    </Button>
                    <Button
                      className="btn-simple"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-bulb-63" /> Check it!
                    </Button>
                  </div>
                </Col>
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
              </Row>
            </Container>
            </div>
    )
}
