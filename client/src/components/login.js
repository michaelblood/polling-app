import React from 'react';

const Login = React.createClass({

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Login</h1>
        </div>
        <div className="row">
          <div className="login-col col-sm-6 text-center">
            <div className="login-house">
              <a href="/auth/twitter">
                <h1>Sign in with Twitter</h1>
                <img className="img img-responsive" width="400px" src="/img/twitter.png" />
              </a>
            </div>
          </div>
          <div className="login-col col-sm-6 text-center">
            <div className="login-house">
              
              <a href="/auth/github">
                <h1>Sign in with GitHub</h1>
                <img className="img img-responsive" width="400px" src="/img/github.png"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Login;