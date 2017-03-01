import React from 'react';
import { Link } from 'react-router';

const Home = React.createClass({

  render() {
    return (
      <div>
        <div className="jumbotron page-title home-title">
          <div className="container">
            <div className="col-xs-12">
              <h1 style={{color: '#f5f5f5'}}>mb-polling<br/><hr /><small style={{color: '#BCD'}}>a polling web app built for freeCodeCamp</small></h1>
            </div>
          </div>
        </div>
        
        <hr style={{borderColor: 'rgba(0,0,0,0)'}}/>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 text-center home-button">
              {!this.props.user ? 
                <Link className="home-link" style={{textDecoration: 'none'}} to="/login">
                  <h1 style={{
                    color: '#31708f'
                  }}><strong>[ Sign in ]</strong></h1>
                </Link>
                :
                <Link className="home-link" style={{textDecoration: 'none'}} to="/polls/new">
                  <h1 style={{
                    color: '#31708f'
                  }}><strong>[ Create poll ]</strong></h1>
                </Link>
              }
            </div>

            <div className="col-xs-12 col-sm-6 text-center home-button">
              <Link className="home-link" style={{textDecoration: 'none'}} to="/polls/all">
                <h1 style={{
                  color: '#31708f'
                }}><strong>[ View all polls ]</strong></h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

    );
  }
});

export default Home;
