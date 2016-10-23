import React, {Component} from 'react';
import PAGES from '../../pages/contribute/index';
import { RouteTransition } from 'react-router-transition';
import Content from '../docs/Content/index';

export class Contribute extends Component {
  render() {
    return (
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <Content page={PAGES.contribute['main']} className="contrib" />
      </RouteTransition>
    )
  }
}
