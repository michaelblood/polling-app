  /********************************/
  /*             @TODO            */
  /********************************/
  /*    DONT RENDER NAVBAR ITEM   */
  /*  IF THAT COMPONENT IS ACTIVE */
  /********************************/

import React from 'react';
import { Link } from 'react-router';

import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const App = React.createClass({
  getInitialState() {
    return {
      loadingDone: false,
      user: null
    };
  },

  componentDidMount() {
    this.determineLogin();
  },
  
  getName() {
    let user = this.state.user;
    if (!user) return 'User';
    let service = user.loginMethod;
    let names = user[service];
    if (names.displayName) return names.displayName;
    return names.username || 'User';
  },

  logout() {
    this.setState({
      user: null
    });
  },

  determineLogin() {
    if (this.state.user) {
      return;
    }
    let app = this;
    fetch('/api/amiloggedin', {
      credentials: 'same-origin'
    }).then(response => response.json())
      .then(json => {
        if (json.error) {
          app.setState({
            loadingDone: true,
            user: null
          });
          return;
        }
        app.setState({
          loadingDone: true,
          user: json
        }, app.forceUpdate());
        return;
      })
      .catch(err => console.log(err));
  },

  render() {
    if (!this.state.loadingDone) {
      return (
        <div className="loading-screen">
          <h1>Loading...</h1>
          <div className="loading-spinner" />
        </div>
      );
    }
    return (
      <div id="app">
        <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">mb-polling</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              { !!this.state.user
                ?
                <NavDropdown id="user-dropdown" eventKey={3} title={this.getName()}>
                  <LinkContainer to="/polls/created">
                    <MenuItem eventKey={5}>My created polls</MenuItem>
                  </LinkContainer>
                  <LinkContainer to="/polls/favorites">
                    <MenuItem eventKey={6}>My favorite polls</MenuItem>
                  </LinkContainer>
                  <MenuItem divider />
                  <MenuItem onClick={this.logout} eventKey={4} href="/logout">Logout</MenuItem>
                </NavDropdown> 
                :
                <LinkContainer to="/login">
                  <NavItem eventKey={1}>Login</NavItem>
                </LinkContainer> }
            </Nav>
            <Nav>
              { !!this.state.user &&
              <LinkContainer to="/polls/new">
                <NavItem eventKey={2}>New poll</NavItem>
              </LinkContainer> }
              <LinkContainer to="/polls/all">
                <NavItem eventKey={7}>All polls</NavItem>
              </LinkContainer>
              <LinkContainer to="/gibberish">
                <NavItem eventKey={8}>404 test</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
});

export default App;