import React from 'react';

const Login = React.createClass({

  render() {
    return (

      <div className="login-page">
        <div className="login-left login text-center">
          <h1><a href="/auth/twitter"><span className="hidden-xs hidden-sm">[ </span>Sign in with Twitter<span className="hidden-xs hidden-sm"> ]</span></a></h1>
        </div>
        <div className="login-right login text-center">
          <h1><a href="/auth/github"><span className="hidden-xs hidden-sm">[ </span>Sign in with GitHub<span className="hidden-xs hidden-sm"> ]</span></a></h1>
        </div>
      </div>
    );
  }
});

export default Login;
