import React, {Component} from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import '../../../images/note.png';

export default class Content extends Component {
  render() {
    const pageData = this.props.page[1];
    return (
      <div className="content">
        <h1 className={pageData.icon ? 'purple' : ''}>
          {pageData.longtitle ? pageData.longtitle : pageData.title}
          {
            pageData.icon ?
            (<img src={require('../../../images/docs/icons/' + pageData.icon)} />) : null
          }
        </h1>
        {pageData.tags ?
          <div className="content-tags">
            {_.map(
              pageData.tags,
              (tag, i) => (<span key={i}>{tag}</span>)
            )}
          </div>
        : null
        }

        <div className="content-body">
          <ReactMarkdown source={this.props.page[0]} renderers={Object.assign(ReactMarkdown.renderers, {
            CodeBlock: CodeBlock
          })} />
        </div>
      </div>
    )
  }
}
