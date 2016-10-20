import React, {Component} from 'react';
import _ from 'lodash';
import {Match} from 'react-router';

export default class Featured extends Component {
  render() {
    const featured = (() => {
      const result = [];

      _.map(this.props.pages, (page, link) => {
        if (page[1].featured) result.push([page[1].featured, link]);
      });

      return result;
    })();

    return (
      <div className="featured">
        <h1>{this.props.title}</h1>
        <div className="block">
          {_.map(featured, (data, i) => (
            <div className="item" key={i}>
              <a href={'/api/' + data[1]} className="image"><img src={require('../../../images/docs/' + data[0].image)} /></a>
              <a href={'/api/' + data[1]} className="title">{data[0].title}</a>
              <p className="desc">{data[0].describe}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
