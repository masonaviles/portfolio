/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/portfolio/swdev.png";
import promo2 from "assets/img/portfolio/swdev2.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";


class Projects extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 full-background-img-projects">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Project Portfolio{" "}
                        <span></span>
                      </h1>
                      <p className="lead text-white">
                        Here you will find all the various projects I've work on.  These range from personal projects, projects I did in school, and production builds I have built out for companies.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://github.com/masonaviles"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-github" />
                          </span>
                          <span className="btn-inner--text">
                            See my Github
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Horned Beasts
                          </h6>
                          <p className="description mt-3">
                            A React App that is like instagram for horned beasts
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              react
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              bootstrap
                            </Badge>
                            {/* <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge> */}
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://github.com/masonaviles/horned-beasts"
                            onClick={e => e.preventDefault()}
                          >
                            Github
                          </Button>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://sleepy-brown-4874a5.netlify.app/"
                            onClick={e => e.preventDefault()}
                          >
                            See It Live
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            City Explorer
                          </h6>
                          <p className="description mt-3">
                            A React App that uses various API's to serve city maps, movies, and weather data based off search queries
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              react
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              node.js
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Weather API
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              MovieDB API
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              LocationIQ API
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://github.com/masonaviles/city-explorer"
                            onClick={e => e.preventDefault()}
                          >
                            Front End
                          </Button>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://github.com/masonaviles/city-explorer-api"
                            onClick={e => e.preventDefault()}
                          >
                            Back End
                          </Button>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://infallible-blackwell-a7eb6f.netlify.app/"
                            onClick={e => e.preventDefault()}
                          >
                            See It Live
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Scoreboard
                          </h6>
                          <p className="description mt-3">
                            A React App for keeping score for a number of players
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              react
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              game
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://github.com/masonaviles/Scoreboard"
                            onClick={e => e.preventDefault()}
                          >
                            Github
                          </Button>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://masonaviles.github.io/Scoreboard/"
                            onClick={e => e.preventDefault()}
                          >
                            See It Live
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg pt-lg-0 mt-200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">

                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Best Books
                          </h6>
                          <p className="description mt-3">
                            A MERN App for keeping track of books a user has read
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              react
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              node.js
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              express
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              mongoDB
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Google Books API
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://github.com/arpatterson31/best-books-front-end"
                            onClick={e => e.preventDefault()}
                          >
                            Front End
                          </Button>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://github.com/arpatterson31/best-books-back-end"
                            onClick={e => e.preventDefault()}
                          >
                            Back End
                          </Button>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://gracious-wilson-69136f.netlify.app/"
                            onClick={e => e.preventDefault()}
                          >
                            See It Live
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Connect Four Game
                          </h6>
                          <p className="description mt-3">
                            A 2 Player Connect Four game that practices OOJavascript
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              vanilla javascript
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              ooj
                            </Badge>
                            {/* <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge> */}
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://masonaviles.github.io/Connect-Four/"
                            onClick={e => e.preventDefault()}
                          >
                            See It Live
                          </Button>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://github.com/masonaviles/Connect-Four"
                            onClick={e => e.preventDefault()}
                          >
                            Github
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>

                    {/* <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            City Explorer
                          </h6>
                          <p className="description mt-3">
                          A React App that uses various API's to serve city maps, movies, and weather data based off search queries
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              react
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              node.js
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Weather API
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              MovieDB API
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              LocationIQ API
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://github.com/masonaviles/city-explorer"
                            onClick={e => e.preventDefault()}
                          >
                            Front End
                          </Button>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://github.com/masonaviles/city-explorer-api"
                            onClick={e => e.preventDefault()}
                          >
                            Back End
                          </Button>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://infallible-blackwell-a7eb6f.netlify.app/"
                            onClick={e => e.preventDefault()}
                          >
                            See It Live
                          </Button>
                        </CardBody>
                      </Card>
                    </Col> */}

                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg bg-lighter">
            <Container>
              <Row className="row-grid align-items-center row-reverse">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={promo1}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Other Projects</h3>
                    <p>
                      Here are some other projects I've worked on
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              <a target="_blank" href="https://github.com/masonaviles/Character_Creation_Tool">Character Creation Tool</a>
                              <Button className="ml-3" href="https://nacerillo.github.io/Character_Creation_Tool/" color="github">See it Live</Button>
                            </h6>
                          </div>
                        </div>
                        <p className="mt-1">
                        A tool that takes in inputs from the user to fill in the fields of an online character sheet.
                        </p>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              <a target="_blank" href="https://github.com/masonaviles/BusMall">BusMall</a>
                              <Button className="ml-3" href="https://masonaviles.github.io/BusMall/" color="github">See it Live</Button>
                            </h6>
                          </div>
                        </div>
                        <p className="mt-1">
                        A product directory that dynamically changes based on user interaction. Based off SkyMall duty free shopping.
                        </p>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              <a target="_blank" href="https://github.com/masonaviles/Cookie-Stand">Cookie Stand</a>
                              <Button className="ml-3" href="https://masonaviles.github.io/Cookie-Stand/" color="github">See it Live</Button>
                            </h6>
                          </div>
                        </div>
                        <p className="mt-1">
                        Uses constructor functions and creates store objects that populate on a page from a form & given values. a store/restaurant website
                        </p>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              <a target="_blank" href="https://github.com/masonaviles/wireframe-exercise">Wireframe Demo</a>
                              <Button className="ml-3" href="https://masonaviles.github.io/wireframe-exercise/" color="github">See it Live</Button>
                            </h6>
                          </div>
                        </div>
                        <p className="mt-1">
                        A prototype from a provided wireframe design comp.
                        </p>
                      </li>
                    </ul>
                  </div>
                  {/* <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card> */}
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={promo2}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Production Builds</h3>
                    <p>
                      Here are some of the enterprise builds I've done.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="warning"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              <a target="_blank" href="https://www.smartsheet.com/">Smartsheet</a>
                            </h6>
                          </div>
                        </div>
                        <p>
                          <Badge color="primary" pill className="mr-1">
                            drupal 7 & 8
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            sass/scss
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            javascript & jquery
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            mysql
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            lingotek
                          </Badge>
                        </p>
                        <p>
                          website theme redesign, drupal 7 to 8 migration, 8 foreign languages lingotek integration
                        </p>
                        <p>
                          <Button className="ml-3" href="https://web.archive.org/web/20181115010834/https://www.smartsheet.com/" color="github">See it</Button>
                        </p>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="warning"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <a target="_blank" href="https://amperity.com/">Amperity</a>
                          </div>
                        </div>
                        <p>
                          <Badge color="primary" pill className="mr-1">
                            php
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            svn
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            craft cms
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            mysql
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            javascript & jquery
                          </Badge>
                        </p>
                        <p>
                          website theme redesign, php website to craft cms web migration
                        </p>
                        <p>
                          <Button className="ml-3" href="https://web.archive.org/web/20200308094530/https://amperity.com/" color="github">See it</Button>
                        </p>
                      </li>
                      {/* <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Super friendly support team
                            </h6>
                          </div>
                        </div>
                      </li> */}
                    </ul>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            A Developer with many hats
                          </h5>
                          <p>
                            In these positions I frequently found myself also filling the shoes of a Project Manager, Quality Assurance Tester, and Technical Trainer and Educator.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>

        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Projects;
