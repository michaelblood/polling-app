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
      loggedIn: false,
      user: null
    };
  },

  componentDidMount() {
    this.determineLogin();
  },
  
  getName() {
    console.log(this.state.user);
    let user = this.state.user;
    if (!user) return 'User';
    let service = user.loginMethod;
    let names = user[service];
    if (names.displayName) return names.displayName;
    return names.username || 'User';
  },

  getJumbotron(element){
    if (!element) return null;
    let title = '';
    switch(element.type.displayName) {
      case 'CreatePoll':
        title = 'New poll';
        break;
      case 'Login':
        title = 'Sign in';
        break;
      case 'PollsContainer':
        title = 'Polls';
        break;
      case 'PollInfo':
        return null;
      case 'Home':
        title = 'mb-polling.herokuapp.com';
        break;
      default:
        title = 'Not found';
    }
    return (
      <div className="text-center page-title jumbotron">
        <h1>{title}</h1>
      </div>
    );
  },

  logout() {
    this.setState({
      user: null,
      loggedIn: false
    });
  },

  determineLogin() {
    let app = this;
    fetch('/api/amiloggedin', {
      credentials: 'same-origin'
    }).then(response => response.json())
      .then(json => {
        if (json.error) {
          app.setState({
            loggedIn: false,
            user: null
          });
          return;
        }
        app.setState({
          loggedIn: true,
          user: json
        }, app.forceUpdate());
        return;
      })
      .catch(err => console.log(err));
  },

  /********************************/
  /*              TODO            */
  /********************************/
  /*    DONT RENDER NAVBAR ITEM   */
  /*  IF THAT COMPONENT IS ACTIVE */
  /********************************/

  render() {
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
              { (this.state.loggedIn && this.state.user)
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
              { this.state.loggedIn &&
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
        {this.getJumbotron(this.props.children)}
        {this.props.children}
      </div>
    );
  }
});

export default App;