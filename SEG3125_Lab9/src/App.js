import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Explore from './components/Explore'
import Profile from './components/Profile'
import Post from './components/Post'
import Commission from './components/Commission'
import Review from './components/Review'
import French from './components/French'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/explore' component={Explore}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/:post_id' component={Post} />
          <Route path='/commission' component={Commission} />
          <Route path='/review' component={Review} />
          <Route path='/french' component={French} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;