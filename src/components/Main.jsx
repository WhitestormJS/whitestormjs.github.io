import 'normalize.css/normalize.css';
import 'styles/App.scss';

import React from 'react';
import {BrowserRouter, Match, Miss, Link} from 'react-router';
import Header from './main/Header';
import {Docs, DocsPage} from './docs/Docs';
import Background from './main/InteractiveBG';
import TableCompare from './main/TableCompare';

class AppComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Background} />
          <Match pattern="/api" render={() => (<Background color='#B8E361'/>)} />
          <Miss component={Background} />
          <Header />

          <Match exactly pattern="/" component={TableCompare} />
          <Match exactly pattern="/api" component={Docs} />
          <Match pattern="/api/:name" component={DocsPage} />
        </div>
      </BrowserRouter>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
