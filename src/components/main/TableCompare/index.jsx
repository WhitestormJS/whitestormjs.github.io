import React, {Component} from 'react';
import TableItem from './TableItem';
import { RouteTransition } from 'react-router-transition';
import spring from 'react-motion/lib/spring';

const tConfig = { stiffness: 900, damping: 22 };

export default class TableCompare extends Component {
  render() {
    return (
      <div>
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
      <div style={{textAlign: "center"}}>
        <RouteTransition
          pathname={this.props.location.pathname}
          atEnter={{ translateX: -5, opacity: 0 }}
          atLeave={{ translateX: 5, opacity: 0 }}
          atActive={{ translateX: 0, opacity: 1 }}
          mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)`, opacity: `${styles.opacity}` })}
        >
          <span className="install">npm install&#8202;
            <a href="https://www.npmjs.com/package/whs" target="_blank" className="whs">whs</a>
          </span>
        </RouteTransition>
      </div>
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
          '<b>Share</b> your plugins'
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
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ translateX: spring(5, tConfig), opacity: 0 }}
        atLeave={{ translateX: spring(-5, tConfig), opacity: 0 }}
        atActive={{ translateX: 0, opacity: 0.25 }}
        mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)`, opacity: `${styles.opacity}` })}
      >
        <img className="view" src={require('../../../images/whsjs.png')} />
      </RouteTransition>
      </div>
    )
  }
}
