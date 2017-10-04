import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  render() {
    return (
        <tr>
            <td>{this.props.destination}</td>
            <td>{this.props.capital}</td>
            <td>{this.props.ol}</td>
            <td>{this.props.pop}</td>
            <td>{this.props.bird}</td>
        </tr>
    );
  }
}

export default Table;
