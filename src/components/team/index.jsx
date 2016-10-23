import React, {Component} from 'react';
import { RouteTransition } from 'react-router-transition';
import TableTeam from './TableTeam/index';

export class Team extends Component {
  render() {
    return (
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <TableTeam />
      </RouteTransition>
    )
  }
}
