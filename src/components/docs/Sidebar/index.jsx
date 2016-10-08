import React, {Component} from 'react';
import _ from 'lodash';
import {Match} from 'react-router';
import {Item, Category} from './SidebarItem/index';

export default class Sidebar extends Component {
  render() {
    const categories = (() => {
      let result = {},
        other = [];

      _.map(this.props.pages, (page, link) => {
        if (page[1].category) {
          if (result[page[1].category]) result[page[1].category].push([page, link]);
          else result[page[1].category] = [[page, link]];
        } else other.push([page, link]);
      });

      return [other, result];
    })();

    console.log(categories);

    return (
      <div className="sidebar">
        <h1>{this.props.title}</h1>
        <ul>
          {_.map(categories[0], (data, i) => (
            <Match key={i} pattern={'/api/' + data[1]} children={({matched}) =>
              matched ?
              (<Item link={data[1]} title={data[0][1].title} active />)
              : (<Item link={data[1]} title={data[0][1].title} />)
            } />
          ))}

          {_.map(categories[1], (data, key) => (
            <Category title={key} key={key} id={key}>
              {_.map(data, (page, i) => (
                <Match key={i} pattern={'/api/' + page[1]} children={({matched}) =>
                  matched ?
                  (<Item link={page[1]} title={page[0][1].title} active />)
                  : (<Item link={page[1]} title={page[0][1].title} />)
                } />
              ))}
            </Category>
          ))}
        </ul>
      </div>
    )
  }
}
