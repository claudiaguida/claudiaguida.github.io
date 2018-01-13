import React from 'react';
import {Col, Row} from 'reactstrap';

const LeSalon = ()=> {
  return (
    <div id="le__salon">
      <h2>LeSalon</h2>
      <h4>Nov 2017</h4>
      <Row className="project__row">
        <Col sm={12} className="d-flex align-items-center">
          <img src={'src/assets/images/lesalon-lightpink.png'} />
        </Col>
        <Col sm={12}>
          <h3>Project Overview</h3>

          <h5>My Role</h5>
          <p>As part of a team of 3 UX designers, we had 2-week and a half Agile sprint to redesign LeSalon website using the double diamond method and the main UX design tools. I led the Discovery and Delivery phases of the Design process. My main strengths include Competitive Analysis, User Interviews, Affinity Maps, Personas, Wireframing and Design Ideation.</p>
          <h5>The Client</h5>
          <p>LeSalon is the leading on-demand beauty service in London. Offering exclusive experience at home, they want their clients to feel empowered and looked after. They strive to offer services that are convenient, affordable and high quality.</p>
          <h5>Brief</h5>
          <p>To redesign LeSalon website with a human-centred approach, with the goal to reduce the landing page bounce rate and improve the conversion.</p>
          <h5>Problem</h5>
          <p>Thanks to an extensive research and a good understanding of our persona and user journey, we understood the main problems laid in the Booking process and in the Navigation. We also had the opportunity to test and improve other critical features such us the Services, the Treatments and the Date&Time pages.</p>
          <h5>Solution</h5>
          <p>After many design iterations and testings, we brought our product from low to high fidelity implementing each time the feedback received. We implemented a brand new Basket, that also served as booking summary, so users can have full control over their purchases. We also introduced a Progress bar that helped users to know what to expect at each stage of their booking.</p>
          <h5>Outcome</h5>
          <p>The design delivered was really well received, LeSalon stakeholders felt so strong about the solutions suggested that have already implemented the majority of it. See the LeSalon website here <a href="https://lesalon.com" rel="noopener  noreferrer" target="_blank" >https:&#47;&#47;lesalon.com</a></p>
          <h5>Tools</h5>
          <p>Paper & sharpies, Sketch, Invision, Trello.</p>
          <a href="http://bit.ly/2CIsV7W" rel="noopener noreferrer" target="_blank">Read more...</a>
        </Col>
      </Row>
    </div>
  );
};

export default LeSalon;
