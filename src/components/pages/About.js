import React from 'react';
// import { Link } from 'react-router-dom';

import { Col, Row } from 'reactstrap';


class About extends React.Component {
  render(){
    return (
      <div id="about">
        <div className="about__header">
          <h2>About Me</h2>
        </div>

        <Row>
          <Col sm={6} className="about__content">
            <p>I am a UX Designer with a background in the fashion retailing industry across multiple disciplines including buying, merchandising and marketing.</p>
            <p>Coming from a humanistic background, I have always been interested in studying different cultures and investigating linguistics and social behaviours. Being an avid researcher and a curious individual has also helped me while developing my 10-year career in Fashion Retail. I have always loved to create products that people would enjoy wearing. As a Product Developer, I learnt to research, ideate, prototype, test, and finally produce an end product always keeping in mind both customers and business needs. I came across UX Design while I was working for a wearable technology startup and needed to research and gather user input to guide the creation of a product which combined fashion and technology, my two passions. Once I discovered the power of human-centred design and the big impact it could have on the end user, I wanted to learn more about it and decided to pivot my career towards it. I realised that a shift was possible and it felt natural. I wanted to create great products that users desire rather than build a product for the target customer.</p>
            <p>My aim is to use my creativity, critical thinking and problem-solving approach to generate great solutions in a more holistic way.</p>
          </Col>
          <Col sm={6} className="about__image">
            <img src="src/assets/images/claudia.jpg"/>
          </Col>
        </Row>


      </div>
    );
  }
}

export default About;
