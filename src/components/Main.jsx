require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Header from './main/Header';
import {Background} from './main/InteractiveBG';
import TableCompare from './main/TableCompare';

class AppComponent extends React.Component {
  render() {
    return (
      <Background>
        <Header />
        <TableCompare />
      </Background>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
