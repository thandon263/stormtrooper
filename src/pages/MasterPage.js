import { React, Component } from 'react';
import { link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';

import Header from './header';

export default class is extends Component {
  render() {
    return (
      <DocumentTitle title='My React App'>
        <div className='MasterPage'>
          <header />
          { this.props.children }
        </div>
        </DocumentTitle>
    );
  }
}
