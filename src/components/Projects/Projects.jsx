import React from 'react';
import { Button, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import './Projects.scss';

export default function Projects() {
  const carouselItems = [
    {
      src: require('../../assets/img/crown1.png'),
      altText: 'Slide 1',
      caption: 'Homepage'
    },
    {
      src: require('../../assets/img/corwn2.png'),
      altText: 'Slide 2',
      caption: 'Collections Page'
    },
    {
      src: require('../../assets/img/crown3.png'),
      altText: 'Slide 3',
      caption: 'Cart Page'
    }
  ];
  const carouselItems2 = [
    {
      src: require('../../assets/img/macro1.png'),
      altText: 'Slide 1',
      caption: 'Homepage'
    },
    {
      src: require('../../assets/img/macro2.png'),
      altText: 'Slide 2',
      caption: 'FAQ / CONTACT Page'
    },
    {
      src: require('../../assets/img/macro3.png'),
      altText: 'Slide 3',
      caption: 'Features'
    }
  ];
  // const carouselItems3 = [
  //   {
  //     src: require("../../assets/img/github1.png"),
  //     altText: "Slide 1",
  //     caption: "Homepage"
  //   },
  //   {
  //     src: require("../../assets/img/github2.png"),
  //     altText: "Slide 2",
  //     caption: "Profile Page"
  //   }
  // ];
  return (
    <div className="section" id="projectsId">
      <Container>
        <Row className="justify-content-between">
          <Col md="6">
            <Row className="justify-content-between align-items-center">
              <UncontrolledCarousel items={carouselItems} />
            </Row>
          </Col>
          <Col md="5">
            <h1 className="profile-title text-left">CRWN Clothing</h1>
            <h5 className="text-on-back">01</h5>
            <p className="profile-description text-left">
              E-commerce store created in React. Implemented Redux for state
              managment. Firebase for authentication and Stripe for payment
              method.
            </p>
            <br />
            <p>Tech Stack: React / Redux / Firebase</p>
            <div className="btn-wrapper pt-3">
              <Button
                className="btn-simple"
                color="primary"
                href="https://github.com/prietop97/e-commerce-website"
                target="_blank"
              >
                <i className="fab fa-github" /> Github
              </Button>
              <Button
                className="btn-simple"
                color="info"
                href="https://e-commerce-website.pedroprieto.now.sh/"
                target="_blank"
              >
                <i className="tim-icons icon-bulb-63" /> Check it!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <Container>
              <Row className="justify-content-between">
                <Col md="5">
                <h1 className="profile-title text-left">Github Finder</h1>
                <h5 className="text-on-back">02</h5>
                  <p className="profile-description text-left">
                    Website that fetches data from multiple endpoints of the Github Api. Was created with React and used context hooks for state managment. 
                  </p>
                  Tech Stack: React / Context
                  <div className="btn-wrapper pt-3">
                    <Button
                      className="btn-simple"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-github" /> Github
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
                    <UncontrolledCarousel items={carouselItems3} />
                  </Row>
                </Col>
              </Row>
            </Container> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row className="justify-content-between">
          <Col md="6">
            <Row className="justify-content-between align-items-center">
              <UncontrolledCarousel items={carouselItems2} />
            </Row>
          </Col>
          <Col md="5">
            <h1 className="profile-title text-left">Marketing Page</h1>
            <h5 className="text-on-back">03</h5>
            <p className="profile-description text-left">
              Worked in a team to create a Macro Calculator App. I was assigned
              the marketing page / landing page of the site. Unfortunately the
              React application was not finished on time so I unlinked them so
              that it does not redirect to an empty website.
            </p>
            <br />
            <p>Duration: 3 days</p>
            <p>Tech Stack: HTML5 / CSS / Less / Javascript</p>
            <div className="btn-wrapper pt-3">
              <Button
                className="btn-simple"
                color="primary"
                href="https://github.com/prietop97/macro-calculator-landing-page"
                target="_blank"
              >
                <i className="fab fa-github" /> Github
              </Button>
              <Button
                className="btn-simple"
                color="info"
                href="https://macro-marketing.now.sh/"
                target="_blank"
              >
                <i className="tim-icons icon-bulb-63" /> Check it!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
