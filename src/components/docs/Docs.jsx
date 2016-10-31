import React, {Component} from 'react';
import PAGES, {categories} from '../../pages/docs/index';
import { RouteTransition } from 'react-router-transition';
import Sidebar from './Sidebar/index';
import Featured from './Featured/index';
import Content from './Content/index';

export class DocsMain extends Component {
  render() {
    return (
     <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <Featured pages={PAGES.docs} title="&nbsp; Documentation" />
      </RouteTransition>
    )
  }
}

export class DocsSidebar extends Component {
  render() {
    return (
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <Sidebar className="alignedLeft" pages={PAGES.docs} categories={categories.docs} title="Tutorials" prefix="/api/" />
      </RouteTransition>)
  }
}

export class DocsPage extends Component {
  render() {
    return (
     <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ translateX: 5, opacity: 0 }}
        atLeave={{ translateX: -5, opacity: 0 }}
        atActive={{ translateX: 0, opacity: 1 }}
        mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)`, opacity: `${styles.opacity}` })}
      >
        <Content className="alignedRight" page={PAGES.docs[this.props.params.name.replace(/.*\//, '')]} />
      </RouteTransition>
    )
  }
}
