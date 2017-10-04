import React, { Component } from 'react';
import './Cards.css';


class Cards extends Component {
  render() {
    return (
    <div className="col-md-3 bg-white">
      <img src={this.props.pic}  width="100%" alt={this.props.pic} />
      <h3>{this.props.name}</h3>
      <a href={"http://www." + this.props.name + ".info/en_US/"} target="_blank">{this.props.name} Tourism Site</a>
    </div>
    );
  }
}

export default Cards;
