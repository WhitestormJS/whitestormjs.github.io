import React from 'react';
import PAGES from '../../pages/docs/index';
import Sidebar from './Sidebar/index';
import Featured from './Featured/index';
import Content from './Content/index';

export class Docs extends React.Component {
  render() {
    return (
      <div>
        <Sidebar pages={PAGES.docs} title="API" prefix="/api/" />
        <Featured pages={PAGES.docs} title="MAIN PAGE" />
      </div>
    )
  }
}

export class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <Sidebar pages={PAGES.docs} title="API" />
        <Content page={PAGES.docs[this.props.params.name]} />
      </div>
    )
  }
}
