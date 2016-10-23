import React, {Component} from 'react';
import PAGES from '../../pages/contribute/index';
import Content from '../docs/Content/index';

export class Contribute extends Component {
  render() {
    return (
      <Content page={PAGES.contribute['main']} className="contrib" />
    )
  }
}
