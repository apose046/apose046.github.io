import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import userId from '../m_arisue.jpg'
import pokemon from '../pokemon.png'
import dgm from '../dgm.jpg'
import christmas from '../christmas.jpg'
import Yuri from '../Yuri.jpg'
import Edelgard from '../Edelgard.jpg'
import Dimitri from '../Dimitri.jpg'
import Claude from '../Claude.jpg'
import Steven from '../Steven.jpg'
import Void from '../Void.jpg'
import Aerith from '../Aerith.jpg'

class Profile extends Component {

  render(){
    
    const ColoredLine = ({ color }) => (
      <hr
          style={{
              color: color,
              backgroundColor: color,
              height: 2
          }}
      />
    );

    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title blue-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
              <div class="center">
              <br/>
              <img src={post.picture} />
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container profile">
          <h4 className="center">Welcome to m_arisue's Profile!</h4>
          <br/>
          <div class="row border2">
            <div class="col offset-s1">
              <img height="250" width="250" src={userId}/>

              
              <h5>Important Links:</h5>
                
                  <ul>
                    <li><h6>{"\u2022"} Extra Commission Information:</h6></li>
                    <div class="col offset-s2">
                      <li>{"\u25E6"} <a href="https://www.deviantart.com/m-arisue/journal/Commissions-Closed-749528963">Rules</a></li>
                    </div>
                    <br/>
                    <li><h6>{"\u2022"} Social Medias:</h6></li>
                    <div class="col offset-s2">
                      <li>{"\u25E6"} <a href="https://www.instagram.com/m_arisue/">Instagram</a></li>
                      <li>{"\u25E6"} <a href="https://twitter.com/m_arisue">Twitter</a></li>
                    </div>
                  </ul>
              </div>
            <br/>
            <div class="col s6">
              <div class="border2" style={{flex: 1, flexWrap: 'wrap'}}>
                <h5 class="center">About this Artist</h5>
                
                <p>Hiya friends! My name is Ari and I like to draw for fun!  I am currently in university, so I'm not that active when  school starts, but I'm hoping to post more in the near future! </p>
              </div>
              
              <div className="center">
                <br/>
                <h5>Commission Status: Open</h5>
                <br/>
                <Link to="/commission"><button className="btn blue lighten-1" onClick={this.handleClick}>Commission This Artist!</button></Link>
              </div>
            </div>
          </div>

          {/*Gallery*/}
          <h3>Commissions Gallery</h3>

          <div class="center">
            {/*Regular*/}
            <ColoredLine color="lightsteelblue" />
            <h4 class="center">Regular Offers</h4>
            <ColoredLine color="lightsteelblue" />

            <h5 class="center">Bust Shots - $15</h5>
            <br/>
            <div class="row valign-wrapper" style={{flex: 1, flexWrap: 'wrap'}}>
              <div class="col">
                <img height="250" width="250" src={Yuri}/>
              </div>
              <div class="col">
                <img height="250" width="250" src={Edelgard}/>
              </div>
              <div class="col">
                <img height="250" width="250" src={Dimitri}/>
              </div>
              <div class="col">
              <img height="250" width="250" src={Claude}/>
              </div>
              <br/>
            </div>
            <ColoredLine color="lightsteelblue" />
            <h4 class="center">Special Offers</h4>
            <ColoredLine color="lightsteelblue" />
            <br/>
            {/*Specials*/}
            <h5>Circular Profile - $25</h5>
            <br/>
            <div class="row valign-wrapper" style={{flex: 1, flexWrap: 'wrap'}}>
              <div class="col offset-s4">
              <img height="350" width="350" src={pokemon}/>
              </div>
            </div>
            <ColoredLine color="lightsteelblue" />
            <h5>Polaroids - $35</h5>
            <br/>
            <div class="row valign-wrapper" style={{flex: 1, flexWrap: 'wrap'}}>
              <div class="col offset-s1">
                <img height="385" width="270" src={Void}/>
              </div>
              <div class="col">
                <img height="385" width="270" src={Steven}/>
              </div>
              <div class="col">
                <img height="385" width="270" src={christmas}/>
              </div>
            </div>
            <ColoredLine color="lightsteelblue" />
            <h5>Detailed Illustrations - $50</h5>
            <br/>
            <div class="row valign-wrapper" style={{flex: 1, flexWrap: 'wrap'}}>
              <div class="col offset-s2">
                <img height="390" width="350" src={Aerith}/>
              </div>
              <div class="col">
                <img height="400" width="350" src={dgm}/>
              </div>
            </div>          
          </div>

          <br/>

          {/*Reviews*/}
          <div class="row valign-wrapper">
            <div class="col">
              <h3>Reviews {"\u2b50"}{"\u2b50"}{"\u2b50"}{"\u2b50"}{"\u2b50"}</h3> 
            </div>
            <div class="col offset-s4">
              <Link to="/review"><button className="btn blue lighten-1 center" onClick={this.handleClick}>Write a Review!</button></Link>
            </div>
          </div>  
          {postList}
          <br/>
          <br/><br/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Profile)