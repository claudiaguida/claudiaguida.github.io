import React from 'react';
import {Col, Row} from 'reactstrap';

const Qbic = ()=> {
  return (
    <div id="project__content">
      <Row
        className="project__header"
        style={{background: 'rgb(210, 217, 228)'}}>
        <Col sm={6} className="project_header__text">
          <h2>Qbic</h2>
          <h4>Nov 2017</h4>
        </Col>
        <Col sm={6} className="d-flex align-items-center">
          <img src={'src/assets/images/qbic-header.png'} />
        </Col>
      </Row>
      <Row className="project__overview">
        <Col sm={12}>
          <h3>Project Overview</h3>
          <h5>My Role</h5>
          <p>During this 2-week Agile sprint, I worked along with a team of 2 UX designers to create a brand new travel experiences App for Qbic Hotels. We meticulously followed the double diamond process and identified the more appropriate methodologies that needed to be used. I led the Research and Define phases; from competitive analysis, contextual inquiries, user interviews to the creation of personas and scenarios and wireframing, I made sure all the UX standards were met.</p>
          <h5>The Client</h5>
          <p>Qbic Hotels is an innovative Hotel chain founded in Amsterdam in 2013. They define themselves as curious, imaginative and friendly. They set themselves apart for their outstanding customer service, eco-friendly philosophy and their interest in the local communities.</p>
          <h5>Brief</h5>
          <p>Qbic Hotels requested a new digital platform which could work along and complement their existing website. They looked for an App which could allow travellers to easily plan and book activities in the local area. They want their guests to see London and the neighbourhood through the eyes of those who live locally, supported by a great customer service and a wide offer.</p>
          <h5>Problem</h5>
          <p>With the findings gathered from our research, we discovered that our main user is a business traveller who wants to spend his spare time visiting the less commercial part of the city. He wouldn&#44;t want to stand among a crowd of tourists but he would rather enjoy a bike ride or a local art exhibition. His main constraints are Time and Commitment. Due to his unpredictable schedule, he needs to be able to book his activities on the spot, reschedule things last minute and have a great customer service support throughout his stay.</p>
          <h5>Solution</h5>
          <p>Having a clear understanding of our users&#44; needs and prioritizing them considering both their impact and viability, we concentrated our design on 3 main features. We created an App that allows the user to browse and book local activities in London. Thanks to the rescheduling feature, the user will be able to change his plan at any time. The user experience will be also improved by the messaging service, which will guide the user throughout his stay. He will also receive tickets, bookings confirmation and calendar alert directly on his phone. </p>
          <h5>Outcome</h5>
          <p>After many design iterations and usability tests, we tested our High Fidelity prototype with many travellers. The App was well received, they believed it would dramatically improve their stay while abroad. They highlighted its great functionality, accessibility and friendly tone of voice.{/*<a href="https://qbichotels.com" rel="noopener  noreferrer" target="_blank" >https:&#47;&#47;qbichotels.com</a>*/}</p>
          {/* {<h5>Tools</h5>
          <p>Paper & sharpies, Sketch, Invision, Trello.</p>} */}
          <a href="http://bit.ly/2lWFWQW" rel="noopener noreferrer" target="_blank">Check out the case study...</a>
        </Col>
      </Row>
    </div>
  );
};

export default Qbic;
