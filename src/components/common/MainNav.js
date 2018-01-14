import React from 'react';
import { /*Container, Collapse, Navbar, NavbarToggler,*/ NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import ReallySmoothScroll from 'really-smooth-scroll';
//
// ReallySmoothScroll.shim();

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (

      <nav id="main-nav" className="navbar navbar-expand-lg navbar-light">
        <NavbarBrand href="/" className="mr-auto">CG
          {/*<img src={'src/assets/images/icons/cg.png'} />*/}
        </NavbarBrand>
        <h4>Claudia Guida</h4>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navigation" id="navbarSupportedContent">
          <Nav className="ml-auto">
            <NavItem>
              <NavLink href="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/process">Process</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </div>
      </nav>

    );
  }
}
