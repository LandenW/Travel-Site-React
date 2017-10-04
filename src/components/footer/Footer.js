import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
    <nav className="navbar navbar-inverse footer">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand">&copy; Travel is fun</a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="www.facebook.com">Facebook</a></li>
            <li><a href="www.twitter.com">Twitter</a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Footer;
