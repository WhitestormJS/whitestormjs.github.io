import React, {Component} from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import '../../../images/note.png';

export default class Content extends Component {
  render() {
    const pageData = this.props.page[1];
    return (
      <div className={this.props.className ? this.props.className + ' content' : 'content'}>
        <h1 className={pageData.icon ? 'purple' : ''}>
          {pageData.longtitle ? pageData.longtitle : pageData.title}
          {
            _.isString(pageData.icon) ?
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
          {_.isBoolean(pageData.wip) ?
            <span className="wip">This page is <u>in development</u></span> : null
          }
          {_.isString(pageData.wip) ?
            <span className="wip">This page is <u>in development</u><br />
              <p>{pageData.wip}</p>
            </span>
            : null
          }
          {_.isArray(pageData.wip) ?
            <span className="wip">This page is <u>in development</u><br />
              <ul>
                {_.map(pageData.wip, v => (<li>{v}</li>))}
              </ul>
            </span>
            : null
          }
          <ReactMarkdown source={this.props.page[0]} renderers={Object.assign(ReactMarkdown.renderers, {
            CodeBlock: CodeBlock
          })} />
        </div>
      </div>
    )
  }
}
