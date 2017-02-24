import React from 'react';

const Login = React.createClass({

  render() {
    return (
      <div className="row">
        <div className="col-xs-4 col-xs-offset-2 text-center">
          <h1><a href="/auth/twitter">with Twitter</a></h1>
        </div>
        <div className="col-xs-4 text-center">
          <h1><a href="/auth/github">with GitHub</a></h1>
        </div>
      </div>
    );
  }
});

export default Login;
