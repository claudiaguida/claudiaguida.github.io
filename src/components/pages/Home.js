import React from 'react';
import { Row } from 'reactstrap';
import Projects from './Projects';


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
        <Projects />
      </div>
    );
  }
}

export default Home;

//redesigning a beauty services website with a human-centred approached
