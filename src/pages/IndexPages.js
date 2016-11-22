import { Link } from 'react';
import React, { Component, PropTypes } from 'react';
import { LoginLink } from 'react-stormpath';

export default class IndexPage extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Welcome!</h2>
        <hr />
        <div className="jumbotron">
          <p>
            <strong>To my React application!</strong>
          </p>
          <p>Ready to begin? Try these storm trooper features that are included in this example:</p>
          <ol className="lead">
            <li><Link to="/register">Registration</Link></li>
            <li><LoginLink /></li>
            <li><Link to="/profile">Custom Profile Data</Link></li>
          </ol>
        </div>
      </div>
    );
  }
}
