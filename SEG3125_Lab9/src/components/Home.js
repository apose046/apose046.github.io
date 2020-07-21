import React, { Component } from 'react';
import { connect } from 'react-redux'
import fe3h from '../fe3h.jpg'
import {Link, NavLink} from 'react-router-dom'

class Home extends Component {
    render() {
        const imageClick = (e) => {
            console.log(this.state);
        }
      return (
        <div className="container">
        <br/>
            <div class="border">
              <h3 className="center">Welcome to Kappa Art!</h3>
              <div className="center" style={{flex: 1, flexWrap: 'wrap'}}>
                <h6>Kappa Art is an online community featuring artwork, of all mediums. Here at Kappa Art, we strive to connect users and artists alike! Begin your Kappa Art journey and support your favourite creators, or explore the site and stumble upon new artists with stunning pieces!</h6>
                <br/>
              </div> 
              <h5>How to Use Kappa Art</h5> 
              <h6>To begin your Kappa Art journey, simply click on the "Explore" button below or in the navigation bar!</h6>
            </div>
              <br/>
            <div className="center">
            <Link to="/explore"><button className="btn blue lighten-1 btn-lg" onClick={this.handleClick}>Explore Kappa Art!</button></Link>
          </div>
            <br/>
            <img src={fe3h} />
        </div>
    );
    }
}

const mapStateToProps = (state) => {
    return {
      posts: state.posts
    }
  }
  
  export default connect(mapStateToProps)(Home)