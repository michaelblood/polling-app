import React from 'react';
import { Link } from 'react-router';

const App = React.createClass({

  render() {
    return (
      <div className="fluid-container">
        <Link to="/login">Login</Link>
        <Link to="/polls/new">New poll</Link>
        {this.props.children}
      </div>
    );
  }
});

export default App;