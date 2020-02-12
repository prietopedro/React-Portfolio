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

import React from 'react';
import classnames from 'classnames';
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from 'reactstrap';
import PerfectScrollbar from 'perfect-scrollbar';
let ps = null;

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on';
      document.documentElement.classList.remove('perfect-scrollbar-off');
      let tables = document.querySelectorAll('.table-responsive');
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle('profile-page');
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy();
      document.documentElement.className += ' perfect-scrollbar-off';
      document.documentElement.classList.remove('perfect-scrollbar-on');
    }
    document.body.classList.toggle('profile-page');
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      // <div className="wrapper">
      //   <div className="page-header">
      //     <img
      //       alt="..."
      //       className="dots"
      //       src={require("../../assets/img/dots.png")}
      //     />
      //     <img
      //       alt="..."
      //       className="path"
      //       src={require("../../assets/img/path4.png")}
      //     />
      <Container className="align-items-center">
        <Row>
          <Col id="about-text" lg="6" md="5">
            <h5 className="text-on-back">
              <i className="far fa-address-card"></i>
            </h5>
            <h1 className="profile-title text-left">About Me</h1>
            <p className="profile-description">
              I'm Pedro Prieto, a software engineer specialized in web
              development . My skills are broad from front-end using JS and
              React to back-end using NodeJS with Express. I'm always eager to
              learn new technologies and improve on my current skills. I enjoy
              each aspect of being a developer, and love building sites from
              start to finish.
            </p>
          </Col>
          <Col id="skills" className="ml-auto mr-auto" lg="4" md="6">
            <Card className="card-coin card-plain">
              <CardHeader>
                <img
                  alt="..."
                  className="img-center img-fluid rounded-circle"
                  src={require('../../assets/img/pedroXl.png')}
                />
                <h4 className="title">Technical Skills</h4>
              </CardHeader>
              <CardBody>
                <Nav className="nav-tabs-primary justify-content-center" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.tabs === 1
                      })}
                      onClick={e => this.toggleTabs(e, 'tabs', 1)}
                      href="#pablo"
                    >
                      Front-End
                    </NavLink>
                  </NavItem>

                  {/* TO DO BACK-END*/}

                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.tabs === 2
                      })}
                      onClick={e => this.toggleTabs(e, 'tabs', 2)}
                      href="#pablo"
                    >
                      Back-End
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.tabs === 3
                      })}
                      onClick={e => this.toggleTabs(e, 'tabs', 3)}
                      href="#pablo"
                    >
                      Other
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className="tab-subcategories"
                  activeTab={'tab' + this.state.tabs}
                >
                  <TabPane tabId="tab1">
                    <h4 style={{ textAlign: 'center' }}>HTML5 / CSS</h4>
                    <h4 style={{ textAlign: 'center' }}>LESS / Sass</h4>
                    <h4 style={{ textAlign: 'center' }}>
                      Javascript / Typescript
                    </h4>
                    <h4 style={{ textAlign: 'center' }}>React / Redux</h4>
                  </TabPane>
                  <TabPane tabId="tab2">
                    <h4 style={{ textAlign: 'center' }}>NodeJS / Express</h4>
                    <h4 style={{ textAlign: 'center' }}>OOP / Java</h4>
                    <h4 style={{ textAlign: 'center' }}>
                      SQL / Relational Databases
                    </h4>
                    <h4 style={{ textAlign: 'center' }}>NoSQL / MongoDB</h4>
                    <h4 style={{ textAlign: 'center' }}>Testing / Jest</h4>
                  </TabPane>
                  <TabPane tabId="tab3">
                    <h4 style={{ textAlign: 'center' }}>
                      Git / Version Control
                    </h4>
                    <h4 style={{ textAlign: 'center' }}>Github</h4>
                    <h4 style={{ textAlign: 'center' }}>Trello</h4>
                    <h4 style={{ textAlign: 'center' }}>Agile development</h4>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      // </div>
      // </div>
    );
  }
}
