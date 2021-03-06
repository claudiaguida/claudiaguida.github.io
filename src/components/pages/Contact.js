import React from 'react';
import { Row } from 'reactstrap';

class Contact extends React.Component {
  render(){
    return (
      <div id="contact">
        <Row className="contact__heading">
          <h2>LET&apos;S TALK</h2>
        </Row>
        {/*<Row className="contact-mobile">
          <a href="tel:+447943227683"><i className="fa fa-mobile" aria-hidden="true"></i></a>
          <a href="tel:+447943227683">+44 7577529059</a>
        </Row>*/}
        <Row className="contact__email">
          <a href="mailto:claudia.guida4@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
          <a href="mailto:claudia.guida4@gmail.com">claudia.guida4</a>
        </Row>
        <Row className="contact__twitter">
          <a href="https://twitter.com/CloguiGuida">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/CloguiGuida">Twitter</a>
        </Row>
        <p>
          Feel free to reachout if you want to collaborate, connect or just have a chat
        </p>
      </div>

    );
  }
}

export default Contact;
