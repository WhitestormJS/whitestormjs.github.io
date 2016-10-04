import React, {Component} from 'react';
import _ from 'lodash';

export default class TableItem extends Component {
  render() {
    return (
      <div className="features-item">
        <img src={require('../../../images/features/' + this.props.logo + '.svg')} />
        <h1>{this.props.name}</h1>
        <ul>
          {_.map(this.props.list, item => (
            <li dangerouslySetInnerHTML={{__html: item}}></li>
          ))}
        </ul>
      </div>
    )
  }
}
