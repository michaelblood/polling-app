import React from 'react';

const Login = React.createClass({

  render() {
    return (

      <div className="login-page">
        <div className="login login-left">
          <a
            role="button"
            href="/auth/twitter"
            onClick={this.props.onClick}
            style={{background: '#31708f'}}
            className="btn btn-standard btn-lg twitter-link"
          >
            <span className="twitter-link">Sign in with Twitter</span>
          </a>
        </div>
        <div className="login login-right">
          <a
            role="button"
            href="/auth/github"
            onClick={this.props.onClick}
            style={{background: '#f5f5f5'}}
            className="btn btn-standard btn-lg github-link"
          >
            <span className="github-link">Sign in with GitHub</span>
          </a>
        </div>
      </div>
    );
  }
});

export default Login;
