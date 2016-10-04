import React from 'react';
import ReactMarkdown from 'react-markdown';
import PAGES from './pages';
import Sidebar from './Sidebar/index';

export class Docs extends React.Component {
  render() {
    return (<div></div>)
  }
}

export class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
      </div>
    )
        // <ReactMarkdown source={PAGES.docs[this.props.params.name][0]} />
  }
}
