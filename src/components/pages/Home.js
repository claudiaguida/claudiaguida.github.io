import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Container} from 'reactstrap';


class Home extends React.Component {
  render(){
    return (
      <div id="home">
        <Row className="home__intro no-gutters">
          <h1>Hello</h1>
          <h4>My name is Claudia
            <br/>
          I enjoy  creating delightful
            <br/>
          engaging UX experiences</h4>
        </Row>
        <Container>
          <h2>Projects</h2>
        </Container>
        <Row className="home__content">
          <Col sm={12} id="home__project">
            <Row>
              <Col sm={3}>
                <Link to="/leSalon"><h2>LeSalon</h2></Link>
                <p>Redesigning a beauty services website<br/> with a human-centred approach.</p>
              </Col>
              <Col sm={9}>
                <img src={'src/assets/images/le-salon.png'}/>
              </Col>
            </Row>
          </Col>
          <Col sm={12} id="home__project">
            <Row>
              <Col sm={3}>
                <Link to="/qbic"><h2>Qbic Hotels</h2></Link>
                <p>Designing a new app which brings<br/> travel experiences to the next level</p>
              </Col>
              <Col sm={9}>
                <img src={'src/assets/images/qbic-hotels.png'}/>
              </Col>
            </Row>
          </Col>
          <Col sm={12} id="home__project">
            <Row>
              <Col sm={3}>
                <Link to="/mindful"><h2>Mindful 21</h2></Link>
                <p>UX Design for a wellness app</p>
              </Col>
              <Col sm={9}>
                <img src={'src/assets/images/mindful-21.png'}/>
              </Col>
            </Row>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Home;

//redesigning a beauty services website with a human-centred approached
