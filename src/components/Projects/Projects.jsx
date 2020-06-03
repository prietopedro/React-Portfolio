import React from "react";
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import "./Projects.scss";

export default function Projects() {
	const carouselItems = [
		{
			src: require("../../assets/img/crown1.png"),
			altText: "Slide 1",
			caption: "",
		},
		{
			src: require("../../assets/img/corwn2.png"),
			altText: "Slide 2",
			caption: "",
		},
		{
			src: require("../../assets/img/crown3.png"),
			altText: "Slide 3",
			caption: "",
		},
	];
	const carouselItems5 = [
		{
			src: require("../../assets/img/staff11.png"),
			altText: "Slide 1",
			caption: "",
		},
		{
			src: require("../../assets/img/staff22.png"),
			altText: "Slide 2",
			caption: "",
		},
		{
			src: require("../../assets/img/staff33.png"),
			altText: "Slide 3",
			caption: "",
		},
	];
	const carouselItems2 = [
		{
			src: require("../../assets/img/macro1.png"),
			altText: "Slide 1",
			caption: "",
		},
		{
			src: require("../../assets/img/macro2.png"),
			altText: "Slide 2",
			caption: "",
		},
		{
			src: require("../../assets/img/macro3.png"),
			altText: "Slide 3",
			caption: "",
		},
	];

	const carouselItems3 = [
		{
			src: require("../../assets/img/Macro111.png"),
			altText: "Slide 1",
			caption: "",
		},
		{
			src: require("../../assets/img/Macro222.png"),
			altText: "Slide 2",
			caption: "",
		},
		{
			src: require("../../assets/img/Macro333.png"),
			altText: "Slide 3",
			caption: "",
		},
	];
	const carouselItems4 = [
		{
			src: require("../../assets/img/puerta11.png"),
			altText: "Slide 1",
			caption: "",
		},
		{
			src: require("../../assets/img/puerta22.png"),
			altText: "Slide 2",
			caption: "",
		},
		{
			src: require("../../assets/img/puerta33.png"),
			altText: "Slide 3",
			caption: "",
		},
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
						<h1 className="profile-title text-left">Speak Out</h1>
						<h5 className="text-on-back">01</h5>
						<p className="profile-description text-left">
							Speak Out is a non-profit organization based in Bahrain that
							provides quality learning to low-income families at affordable
							prices.
						</p>
						<p className="text-left" style={{ fontWeight: "bold" }}>
							Accomplishments:
						</p>
						<p className="ml-4">
							- Executed in under 6 weeks, with a team of 4 Web Developers
						</p>
						<p className="ml-4">
							- Increased staff productivity by creating a dashboard where
							admins could follow their daily paper-based workflow digitally
						</p>
						<p className="ml-4">
							- Enabled stakeholder to expand to a new location by creating an
							accessible relational database that stores all students, courses,
							and staff information online. The previous database could only be
							accessed in one device at a time
						</p>
						<br />
						<p>Tech Stack: React / Redux / NodeJS / Express / PostgreSQL</p>
						<div className="btn-wrapper pt-3">
							<Button
								className="btn-simple"
								color="primary"
								href="https://github.com/Lambda-School-Labs/speak-out-be"
								target="_blank"
							>
								<i className="fab fa-github" /> Github
							</Button>
							<Button
								className="btn-simple"
								color="info"
								href="https://speakout.pedroprieto.now.sh/"
								target="_blank"
							>
								<i className="tim-icons icon-bulb-63" /> Live Demo
							</Button>
							<Button
								className="btn-simple"
								color="success"
								href="https://www.youtube.com/watch?v=HrkI5MD3HQI"
								target="_blank"
							>
								<i className="tim-icons icon-video-66" /> Video Demo
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
						<h1 className="profile-title text-left">Macros Calculator</h1>
						<h5 className="text-on-back">02</h5>
						<p className="profile-description text-left">
							Marketing / Landing Page for a macros calculator web application.
						</p>
						<p className="text-left" style={{ fontWeight: "bold" }}>
							Accomplishments:
						</p>
						<p className="ml-4">- Completed in 3 days.</p>
						<p className="ml-4">
							- Implemented an accordion FAQ section using vanilla JS and DOM
							manipulation
						</p>
						<p className="ml-4">
							- Added breakpoints to make the page fully responsive and improve
							user experience.
						</p>
						<br />
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
								<i className="tim-icons icon-bulb-63" /> Live Demo
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
			{/* <Container className="my-5">
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
			</Container> */}
			{/* <Container className="my-5">
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
      </Container> */}
			<Container className="my-5">
				<Row className="justify-content-between">
					<Col md="6">
						<Row className="justify-content-between align-items-center">
							<UncontrolledCarousel items={carouselItems4} />
						</Row>
					</Col>
					<Col md="5">
						<h1 className="profile-title text-left">
							Puerta IO -Hackathon Winner
						</h1>
						<h5 className="text-on-back">03</h5>
						<p className="profile-description text-left">
							Puerta IO unifies an app like Uber with an app like Zillow. It
							would make buying real estate properties a breeze by giving
							consumers the option to schedule house tours in an instant.
						</p>
						<p className="text-left" style={{ fontWeight: "bold" }}>
							Accomplishments:
						</p>
						<p className="ml-4">
							- Collaborated remotely with a team of 6 web developers and 2
							UX/UI designers for 30 hours.
						</p>
						<p className="ml-4">
							- Solely responsible for creating database schema and building
							endpoints for the project back end and server-side functions.
						</p>
						<p className="ml-4">
							- Utilized Twilio’s API to implement SMS notifications for agents.
						</p>
						<br />
						<p>Tech Stack: NodeJS / Express / MongoDB / NextJS / Twilio</p>
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
								color="success"
								href="https://www.youtube.com/watch?time_continue=1&v=teNHAeTtots&feature=emb_logo"
								target="_blank"
							>
								<i className="tim-icons icon-video-66" /> Video Demo
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
