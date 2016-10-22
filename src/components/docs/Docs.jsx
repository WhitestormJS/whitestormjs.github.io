import React, {Component} from 'react';
import PAGES, {categories} from '../../pages/docs/index';
import Sidebar from './Sidebar/index';
import Featured from './Featured/index';
import Content from './Content/index';

export class Docs extends Component {
  render() {
    return (
      <div>
        <Sidebar pages={PAGES.docs} categories={categories.docs} title="API" prefix="/api/" />
        <Featured pages={PAGES.docs} title="- Documentation -" />
      </div>
    )
  }
}

export class DocsPage extends Component {
  render() {
    return (
      <div>
        <Sidebar pages={PAGES.docs} categories={categories.docs} title="API" prefix="/api/" />
        <Content page={PAGES.docs[this.props.params.name.replace(/.*\//, '')]} />
      </div>
    )
  }
}
