import React from 'react';
import { Row, Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';


// import projectData from '../utility/data';
// import ImageCarousel from '../utility/ImageCarousel';
// import Project from '../projects/Project';

const Projects = ()=> {
  return (
    <div id="projects">
      <Container>
        <h2>Projects</h2>
      </Container>
      <Row className="project__content">
        <Col sm={12} id="project__item">
          <Row>
            <Col sm={3}>
              <Link to="/leSalon"><h2>LeSalon</h2></Link>
              <p>Redesigning a beauty<br/>
              services website with<br/>
              a human-centred approach.</p>
            </Col>
            <Col sm={9}>
              <img src={'src/assets/images/le-salon.png'}/>
            </Col>
          </Row>
        </Col>
        <Col sm={12} id="project__item">
          <Row>
            <Col sm={3}>
              <Link to="/qbic"><h2>Qbic Hotels</h2></Link>
              <p>Designing a new app which<br/>
              brings travel experiences<br/>
              to the next level</p>
            </Col>
            <Col sm={9}>
              <img src={'src/assets/images/qbic-hotels.png'}/>
            </Col>
          </Row>
        </Col>
        <Col sm={12} id="project__item">
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
};

export default Projects;
