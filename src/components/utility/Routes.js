import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import LeSalon from '../pages/LeSalon';
import Qbic from '../pages/Qbic';
import Mindful from '../pages/Mindful';
import Process from '../pages/Process';
import Projects from '../pages/Projects';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/contact" component={Contact} />
      <Route  path="/leSalon" component={LeSalon} />
      <Route  path="/qbic" component={Qbic} />
      <Route  path="/mindful" component={Mindful} />
      <Route  path="/process" component={Process} />
      <Route  path="/projects" component={Projects} />
    </Switch>
  );
};

export default Routes;
