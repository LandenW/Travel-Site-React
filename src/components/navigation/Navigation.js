import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
<nav className="navbar navbar-inverse">
  <div className="container-fluid">

    <div className="navbar-header">
      <a className="navbar-brand" href="">Travel Site</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li className="active"><a href="">Home <span className="sr-only">(current)</span></a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Stuff</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
    );
  }
}

export default Navigation;
