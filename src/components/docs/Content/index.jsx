import React, {Component} from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import '../../../images/note.png';

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <h1>{this.props.page[1].title}</h1>
        {this.props.page[1].tags ?
          <div className="content-tags">
            {_.map(
              this.props.page[1].tags,
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
