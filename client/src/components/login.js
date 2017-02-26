import React from 'react';

const Login = React.createClass({

  render() {
    return (

      <div className="login-page">
        <div className="login-left login text-center">
          <h1><a href="/auth/twitter">Sign in with Twitter</a></h1>
        </div>
        <div className="login-right login text-center">
          <h1><a href="/auth/github">Sign in with GitHub</a></h1>
        </div>
      </div>
    );
  }
});

export default Login;
