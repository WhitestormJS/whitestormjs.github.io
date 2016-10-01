import React, {Component} from 'react';

export default class TableItem extends Component {
  render() {
    return (
      <div className="features-item">
        <img src={require('../../../images/features/physics.svg')} />
        <h1>Built-in physics</h1>
        <ul>
          <li>Basic shapes collision</li>
          <li>Convex and concave shapes</li>
          <li><b>Softbody</b> shapes</li>
          <li>Fast physics ported from <b>C++</b></li>
        </ul>
      </div>
    )
  }
}
