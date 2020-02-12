import React from 'react';
import { Button, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import './Projects.scss';

export default function Projects() {
  const carouselItems = [
    {
      src: require('../../assets/img/crown1.png'),
      altText: 'Slide 1',
      caption: ''
    },
    {
      src: require('../../assets/img/corwn2.png'),
      altText: 'Slide 2',
      caption: ''
    },
    {
      src: require('../../assets/img/crown3.png'),
      altText: 'Slide 3',
      caption: ''
    }
  ];
  const carouselItems5 = [
    {
      src: require('../../assets/img/staff11.png'),
      altText: 'Slide 1',
      caption: ''
    },
    {
      src: require('../../assets/img/staff22.png'),
      altText: 'Slide 2',
      caption: ''
    },
    {
      src: require('../../assets/img/staff33.png'),
      altText: 'Slide 3',
      caption: ''
    }
  ];
  const carouselItems2 = [
    {
      src: require('../../assets/img/macro1.png'),
      altText: 'Slide 1',
      caption: ''
    },
    {
      src: require('../../assets/img/macro2.png'),
      altText: 'Slide 2',
      caption: ''
    },
    {
      src: require('../../assets/img/macro3.png'),
      altText: 'Slide 3',
      caption: ''
    }
  ];

  const carouselItems3 = [
    {
      src: require('../../assets/img/Macro111.png'),
      altText: 'Slide 1',
      caption: ''
    },
    {
      src: require('../../assets/img/Macro222.png'),
      altText: 'Slide 2',
      caption: ''
    },
    {
      src: require('../../assets/img/Macro333.png'),
      altText: 'Slide 3',
      caption: ''
    }
  ];
  const carouselItems4 = [
    {
      src: require('../../assets/img/puerta11.png'),
      altText: 'Slide 1',
      caption: ''
    },
    {
      src: require('../../assets/img/puerta22.png'),
      altText: 'Slide 2',
      caption: ''
    },
    {
      src: require('../../assets/img/puerta33.png'),
      altText: 'Slide 3',
      caption: ''
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
      <Container className="my-5">
        <Row className="justify-content-between">
          <Col md="6">
            <Row className="justify-content-between align-items-center">
              <UncontrolledCarousel items={carouselItems5} />
            </Row>
          </Col>
          <Col md="5">
            <h1 className="profile-title text-left">Speak Out -Ongoing</h1>
            <h5 className="text-on-back">01</h5>
            <p className="profile-description text-left">
              Speak Out is a non-profit organitazion based in Bahrain that
              provides quality learning to low income families at affordable
              prices.
            </p>
            <p className="text-left">
              <span style={{ fontWeight: 'bold' }}>Current Problem:</span> As
              Speak Out scales to serve more people across multiple locations,
              it is has become increasingly difficult to keep track of student
              registration, attendance, tuition, and much more. Also a lot of
              their business workflow is paper forms that then need to be
              transfered to a database. They are currently using Microsoft
              Access for the database and it can only be accessed on one
              computer at a time; making data-entry very time consuming.
            </p>
            <p className="text-left" style={{ fontWeight: 'bold' }}>
              My Accomplishments:
            </p>
            <p style={{ fontWeight: 500, marginLeft: '0.5rem' }}>
              First Release Canvas 1/28/2020 - 2/7/2020
            </p>
            <p className="ml-4">
              - Updated database schema and authentication endpoints to support
              different user roles.
            </p>
            <p className="ml-4">
              - Created CRUD endpoints for Staff, Courses and Student tables
              with pagination and queries support.
            </p>

            <br />
            <p>Login Credentials:</p>
            <p>
              Username: <span style={{ fontStyle: 'bold' }}>admin</span>
            </p>
            <p>
              Password: <span style={{ fontStyle: 'bold' }}>pass</span>
            </p>
            <br />
            <p>Team size: 6 Developers</p>
            <p>Duration: 01/20/2020 - 03/06/2020</p>
            <p>
              Tech Stack: React / Redux / Node / Express / PostgreSQL / Jest
            </p>
            <div className="btn-wrapper pt-3">
              <Button
                className="btn-simple"
                color="primary"
                href="https://github.com/orgs/Lambda-School-Labs/teams/labs-20-speak-out/repositories"
                target="_blank"
              >
                <i className="fab fa-github" /> Github
              </Button>
              <Button
                className="btn-simple"
                color="info"
                href="https://speak-out-bh.com/"
                target="_blank"
              >
                <i className="tim-icons icon-bulb-63" /> Check it!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row className="justify-content-between">
          <Col md="6">
            <Row className="justify-content-between align-items-center">
              <UncontrolledCarousel items={carouselItems2} />
            </Row>
          </Col>
          <Col md="5">
            <h1 className="profile-title text-left">Marketing Page</h1>
            <h5 className="text-on-back">02</h5>
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
      <Container className="my-5">
        <Row className="justify-content-between">
          <Col md="6">
            <Row className="justify-content-between align-items-center">
              <UncontrolledCarousel items={carouselItems} />
            </Row>
          </Col>
          <Col md="5">
            <h1 className="profile-title text-left">CRWN Clothing</h1>
            <h5 className="text-on-back">03</h5>
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
      <Container className="my-5">
        <Row className="justify-content-between">
          <Col md="6">
            <Row className="justify-content-between align-items-center">
              <UncontrolledCarousel items={carouselItems3} />
            </Row>
          </Col>
          <Col md="5">
            <h1 className="profile-title text-left">Macro Calculator</h1>
            <h5 className="text-on-back">04</h5>
            <p className="profile-description text-left">
              Worked in a team of 5 developers to create a Macro Calculator
              Application. Was assigned the Front-End Developer role and my main
              responsibilities were to:
              <p className="my-0">
                - Connect front end to back end using ajax/axios
              </p>
              <p>- Use Redux for state managment</p>
              <p>- Implement the algorithm to calculate daily macros</p>
            </p>
            <br />
            <p>Login Credentials:</p>
            <p>
              Username: <span style={{ fontStyle: 'bold' }}>myusername</span>
            </p>
            <p>
              Password: <span style={{ fontStyle: 'bold' }}>mypassword</span>
            </p>
            <br />
            <p>Duration: 4 days</p>
            <p>Tech Stack: React / Redux</p>
            <div className="btn-wrapper pt-3">
              <Button
                className="btn-simple"
                color="primary"
                href="https://github.com/prietop97/macro-calculator-react"
                target="_blank"
              >
                <i className="fab fa-github" /> Github
              </Button>
              <Button
                className="btn-simple"
                color="info"
                href="https://macro-calculator-react.now.sh/"
                target="_blank"
              >
                <i className="tim-icons icon-bulb-63" /> Check it!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row className="justify-content-between">
          <Col md="6">
            <Row className="justify-content-between align-items-center">
              <UncontrolledCarousel items={carouselItems4} />
            </Row>
          </Col>
          <Col md="5">
            <h1 className="profile-title text-left">Puerta IO -Hackathon</h1>
            <h5 className="text-on-back">05</h5>
            <p className="profile-description text-left">
              Worked in a team of 8 to create a real state progressive web app
              during a 30 hour hackathon. Won in the "Most Likely To Become A
              Start-Up" competition. I was assigned the Back-End Developer role
              and my main responsibilities were to:
              <p className="my-0">
                - Create a role based authentication for realtors/buyers/admins
              </p>
              <p>
                - Use web sockets for real time bidirectional information sync
              </p>
              <p>- Add functionality for SMS notifications</p>
              <p>- Create a NoSQL database schema</p>
              <p>- CRUD endpoints for users and listings</p>
              <p>- Add functionality for the user to Like/Dislike a listing</p>
              <p>
                - Add functionality for the user to schedule a property tour
              </p>
            </p>
            <br />
            <p>Duration: 30 hours</p>
            <p>
              Tech Stack: NodeJS / Express / SocketIO / MongoDB / PassportJS
            </p>
            <div className="btn-wrapper pt-3">
              <Button
                className="btn-simple"
                color="primary"
                href="https://github.com/PuertaApp/puertaApp/tree/dev"
                target="_blank"
              >
                <i className="fab fa-github" /> Github
              </Button>
              <Button
                className="btn-simple"
                color="info"
                href="https://www.youtube.com/watch?time_continue=1&v=teNHAeTtots&feature=emb_logo"
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
