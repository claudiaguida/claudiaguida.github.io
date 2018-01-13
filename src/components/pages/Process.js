import React from 'react';
import { Col, Row } from 'reactstrap';
// import projectData from '../utility/data';
// import ImageCarousel from '../utility/ImageCarousel';
// import Project from '../projects/Project';

const Process = ()=> {
  return (
    <div id="process">
      <Row className="process__intro">
        <h2>My Design Process</h2>
        <p>Design starts with developing a deep understanding of the design context, through the experiences and the perspective of those impacted. I follow a centred-design approach applied to the double-diamond design process.</p>
        <img src={'src/assets/images/double_diamond2.jpg'} />
      </Row>
      <Row>
        <Col sm={6}>
          <h3>Discovery</h3>
          <p>The first part of the Double Diamond Model begins with an initial problem, idea or inspiration. During this phase, the process focuses on researching the market to explore business needs and gather information about users, their behaviour and current situation.</p>
          <ul>
            <li>Market research</li>
            <li>Contextual Inquiry</li>
            <li>User Research</li>
            <li>Competitor Analysis</li>
            <li>Interviews</li>
            <li>Survey</li>
            <li>Heuristic evaluation</li>
          </ul>
        </Col>
        <Col sm={6}>
          <h3>Define</h3>
          <p>The second part of the design process is the definition phase. The initial ideas and research are analysed and synthesized to define the problem, to identify personas, their experience and frustrations throughout a journey.</p>
          <ul>
            <li>Affinity Map</li>
            <li>User tasks & User Journey</li>
            <li>Persona</li>
            <li>User Flows</li>
            <li>Card sorting</li>
            <li>information architecture & sitemaps</li>
            <li>Feature prioritisation</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <h3>Develop</h3>
          <p>The third phase marks a period of development where design-led solutions are ideated, developed, iterated and tested. User feedback represents the only validation of any design proposal.</p>
          <ul>
            <li>Sketching and ideation</li>
            <li>Design Studio</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>User interface design</li>
            <li>Interaction design</li>
            <li>Usability testing</li>
          </ul>
        </Col>
        <Col sm={6}>
          <h3>Deliver</h3>
          <p>In this phase, prototypes of different fidelity, are evaluated by users to verify and refine details around the design. Through iteration, the product or feature is consolidated. Detailed UI guideline and production assets need to be created for sign-off approval.</p>
          <ul>
            <li>Low to High Fidelity Prototypes</li>
            <li>Clickable prototype</li>
            <li>Design specification</li>
            <li>Next Steps</li>
            <li>Presentation</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col sm={6} className="image"><img src={'src/assets/images/process-img.JPG'} /></Col>
        <Col sm={6} className="image"><img src={'src/assets/images/process-img-2.JPG'} /></Col>
        <Col sm={6} className="image"><img src={'src/assets/images/process-img-3.JPG'} /></Col>
        <Col sm={6} className="image"><img src={'src/assets/images/process-img-4.JPG'} /></Col>
      </Row>
    </div>
  );
};

export default Process;
