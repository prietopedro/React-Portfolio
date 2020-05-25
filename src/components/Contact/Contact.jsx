/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useState } from "react";
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from "reactstrap";

import { saveMessage } from "../../firebase/firebase";

export default function Contact() {
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		phone: "",
		company: "",
		message: "",
	});

	const [message, setMessage] = useState("");

	const changeHandler = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const submitForm = (e) => {
		e.preventDefault();
		saveMessage(formValues);
		setMessage("Thank you! I will get back to you soon!");
		setFormValues({
			name: "",
			email: "",
			phone: "",
			company: "",
			message: "",
		});

		setTimeout(() => {
			setMessage("");
		}, 2000);
	};
	console.log(formValues);
	return (
		<section className="section">
			<Container>
				<Row>
					<Col md="6">
						<Card className="card-plain">
							<CardHeader>
								<h1 className="profile-title text-left">Contact</h1>
								<h5 className="text-on-back">
									<i class="far fa-address-card"></i>
								</h5>
							</CardHeader>
							<CardBody>
								<Form>
									<Row>
										<Col md="6">
											<FormGroup>
												<label>Your Name</label>
												<Input
													onChange={changeHandler}
													name="name"
													value={formValues.name}
													placeholder="John"
													type="text"
												/>
											</FormGroup>
										</Col>
										<Col md="6">
											<FormGroup>
												<label>Email address</label>
												<Input
													placeholder="johndoe@email.com"
													type="email"
													onChange={changeHandler}
													value={formValues.email}
													name="email"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="6">
											<FormGroup>
												<label>Phone</label>
												<Input
													value={formValues.phone}
													name="phone"
													onChange={changeHandler}
													placeholder="Optional"
													type="text"
												/>
											</FormGroup>
										</Col>
										<Col md="6">
											<FormGroup>
												<label>Company</label>
												<Input
													name="company"
													value={formValues.company}
													onChange={changeHandler}
													placeholder="Optional"
													type="text"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="12">
											<FormGroup>
												<label>Message</label>
												<Input
													name="message"
													placeholder="Hello there!"
													value={formValues.message}
													onChange={changeHandler}
													type="text"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Button
										className="btn-round float-right"
										color="primary"
										data-placement="right"
										id="tooltip341148792"
										type="button"
										onClick={submitForm}
									>
										Contact Me
									</Button>
									<UncontrolledTooltip
										delay={0}
										placement="right"
										target="tooltip341148792"
									>
										Can't wait for your message
									</UncontrolledTooltip>
									<p>{message}</p>
								</Form>
							</CardBody>
						</Card>
					</Col>
					<Col className="ml-auto" md="4">
						<div className="info info-horizontal">
							<div className="icon icon-primary">
								<i className="tim-icons icon-square-pin" />
							</div>
							<div className="description">
								<h4 className="info-title">Located In</h4>
								<p>
									Miami, Florida, <br />
									USA
								</p>
							</div>
						</div>
						<div className="info info-horizontal">
							<div className="icon icon-primary">
								<i className="tim-icons icon-mobile" />
							</div>
							<div className="description">
								<h4 className="info-title">Contact Me</h4>
								<p>
									Pedro Prieto <br />
									+1 (305) 484-0288 <br />
									contact@pedroprieto.dev
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
