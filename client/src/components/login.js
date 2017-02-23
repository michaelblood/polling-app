import React from 'react';

const Login = React.createClass({

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 text-center">
          <h1><a href="/auth/twitter">Sign in with Twitter</a></h1>
        </div>
        <div className="col-sm-6 text-center">
          <h1><a href="/auth/github">Sign in with GitHub</a></h1>
        </div>
      </div>
    );
  }
});