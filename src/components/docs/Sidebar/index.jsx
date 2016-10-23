import React, {Component} from 'react';
import _ from 'lodash';
import {Match, matchPattern} from 'react-router';
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

    const prefix = this.props.prefix || '';

    return (
      <div className={this.props.className + ' sidebar'}>
        <h1>{this.props.title}</h1>
        <ul>
          <Match key="main" exactly pattern="/api" children={({matched}) =>
            <Item link="/api" title="Main page" active={matched} />
          } />

          {_.map(categories[0], (data, i) => (
            <Match key={i} pattern={prefix + data[1]} children={({matched}) =>
              <Item link={prefix + data[1]} title={data[0][1].title}
                active={matched}
                icon={data[0][1].icon ? data[0][1].icon : false}
              />
            } />
          ))}

          {_.map(categories[1], (data, key) => {
            let isActive = false;

            _.map(data, (page, i) => {
              isActive = matchPattern(
                prefix + page[1],
                window.location,
                false
              ) ? true : isActive;

              isActive = matchPattern(
                prefix + key + '/' + page[1],
                window.location,
                false
              ) ? true : isActive;
            });

            return (
              <Category
                title={key}
                icon={this.props.categories[key] ? this.props.categories[key].icon : false}
                key={key}
                id={key}
                isActive={isActive}
              >
                {_.map(data, (page, i) => (
                  <Match key={i} pattern={prefix + key + '/' + page[1]} children={({matched}) =>
                    <Item link={prefix + key + '/' + page[1]} title={page[0][1].title}
                      active={matched}
                      icon={this.props.categories[key].noExtend ? page[0][1].icon : this.props.categories[key].icon}
                    />
                  } />
                ))}
              </Category>
            )
          })}
        </ul>
      </div>
    )
  }
}
