import React from 'react';
import {Col, Row} from 'reactstrap';

const Mindful = ()=> {
  return (
    <div id="project__content">
      <Row
        className="project__header"
        style={{background: 'rgb(149, 192, 206)'}}>
        <Col sm={6} className="project_header__text">
          <h2>Mindful</h2>
          <h4>Nov 2017</h4>
        </Col>
        <Col sm={6} className="d-flex align-items-center">
          <img src={'src/assets/images/mindful.png'} />
        </Col>
      </Row>
      <Row className="project__overview">
        <Col sm={12}>
          <h5 style={{margin: 50+'px ' + 0+'px '+ 20+'px '+ 0+'px'}}>Project Overview</h5>
          <p>During my first week as UX immersive student at GA, I was asked to create an app for one of my classmates, Jon. Mindful 21 was created to help Jon to get into a meditation routine and to build a new long-lasting habit.</p>

          {/* <h5>Brief</h5> */}
          {/* <p>To redesign Mindful website with a human-centred approach, with the goal to reduce the landing page bounce rate and improve the conversion.</p> */}
          <h5>Problem</h5>
          <p>Jon is a busy editor who has recently experienced an injury and has partially lost his ears. His daily routine has dramatically changed since then, so he wants to regain his tranquillity by using a meditation app. Jon has tried already other meditation apps but he finds them extremely complicated and overwhelming. He wants a product which is easy to use and customisable according to his busy schedule.</p>
          <h5>Methods</h5>
          <p>User research, User interviews, Concept Mapping, Storyboarding, Wireframing, Paper prototype.</p>
          <h5>Solution</h5>
          <p>After an extensive research and spending lots of time with my user testing different versions of the paper prototypes, I created a very simple meditation App that Jon would enjoy to use. The user starts experiencing a sense of calm already by opening the landing page. Here he will be welcomed with a free 2 minutes meditation. There is no signup form, he can decide to log-in to the App after this meditation. This welcoming feeling will last throughout the entire experience. The user, after signing up, would land on the setting page and customise the duration time of the podcast and also set a reminder linked to his personal calendar.</p>
          <h5>Outcome</h5>
          <p>Jon was extremely happy with the result and he said he would definitely use Mindful 21. I also gathered great feedback on the visual aspect of it. Most of the users found it very pleasing to the eye and felt a sense of relaxation while interacting with it.</p>
          <h5>Tools</h5>
          <p>Lots of sharpies and Marvel App.</p>
          <a href="http://bit.ly/2D3Mh7F" rel="noopener noreferrer" target="_blank">Check out the case study...</a>
        </Col>
      </Row>
    </div>
  );
};

export default Mindful;
