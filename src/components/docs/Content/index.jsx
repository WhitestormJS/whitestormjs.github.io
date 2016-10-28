import React, {Component} from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import '../../../images/note.png';

const removeYaml = (content) => {
  if (content.match(/^---/g) && content.match(/---/g).length >= 2) {
    return content.substring(
      content.indexOf('---', 1) + 3,
      content.length
    );
  } else return content;
}

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
          {
            pageData.edit ?
            (<a className="edit" href={pageData.edit}>✎ Edit</a>) : null
          }
          {
            pageData.source ?
            (<a className="edit src" href={pageData.source}> <span>&lt;/&gt; - source</span></a>) : null
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

          {
            console.log(removeYaml(this.props.page[0])) ? null : null
          }
          <ReactMarkdown source={removeYaml(this.props.page[0])} renderers={Object.assign(ReactMarkdown.renderers, {
            CodeBlock: CodeBlock
          })} />
        </div>
      </div>
    )
  }
}
