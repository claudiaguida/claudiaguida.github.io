import React from 'react';

export default class Footer extends React.Component {

  render() {
    return (
      <ul className="footer">
        <div></div>
        <div className="icons">
          <a href="https://www.instagram.com/claudiagux">
            <li>
              <i className="fa fa-instagram" aria-hidden="true"></i></li>
          </a>
          <a href="https://twitter.com/CloguiGuida">
            <li>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </li>
          </a>
          <a href="https://medium.com/@claudia.guida4">
            <li>
              <i className="fa fa-medium" aria-hidden="true"></i>
            </li>
          </a>
          <a href="https://www.linkedin.com/in/claudiaguida/">
            <li>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </li>
          </a>
        </div>
        <p>© 2018</p>
      </ul>
    );
  }
}
