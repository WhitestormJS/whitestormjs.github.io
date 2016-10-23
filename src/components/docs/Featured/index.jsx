import React, {Component} from 'react';
import _ from 'lodash';
import {Link} from 'react-router';
import {Match} from 'react-router';

export default class Featured extends Component {
  render() {
    const featured = (() => {
      const result = [];

      _.map(this.props.pages, (page, link) => {
        if (page[1].featured) result.push([page[1], link]);
      });

      return result;
    })();

    return (
      <div className="featured">
        <h1>{this.props.title}</h1>
        <div className="block">
          {_.map(featured, (data, i) => (
            <div className="item" key={i}>
              <Link to={data[0].category ? '/api/' + data[0].category + '/' + data[1] : '/api/' + data[1]} className="image"><img src={require('../../../images/docs/' + data[0].featured.image)} /></Link>
              <Link to={'/api/' + data[1]} className="title">{data[0].title}</Link>
              <p className="desc">{data[0].featured.describe}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
