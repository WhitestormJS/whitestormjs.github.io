import React, {Component} from 'react';
import TableItem from './TableItem';
import { RouteTransition } from 'react-router-transition';

export default class TableCompare extends Component {
  render() {
    return (
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
      <div className="features">
        <TableItem
        name="Built-in physics"
        logo="physics"
        list={[
          'Basic shapes collision',
          'Convex and concave shapes',
          '<b>Softbody</b> shapes',
          'Fast physics ported from <b>C++</b>'
        ]} />

        <TableItem
        name="React-like"
        logo="react2"
        list={[
          '<b>Component-based</b>',
          'Lights, Cameras, Meshes',
          'ES6 decorators style',
          '<b>Use</b> others components',
          '<b>Share</b> your plugins',
        ]} />

        <TableItem
        name="Fast development"
        logo="speed"
        list={[
          '<b>Used THREE.js technology</b>',
          'Simple structure',
          'Best for <b>BIG</b> Apps and Games',
          'Easiest Hello World example'
        ]} />
      </div>
      </RouteTransition>
    )
  }
}
