import React from 'react';
import PAGES from './pages';
import Sidebar from './Sidebar/index';
import Content from './Content/index';

export class Docs extends React.Component {
  render() {
    return (<div></div>)
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
