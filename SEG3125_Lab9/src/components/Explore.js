import React from 'react'
import m_arisue from '../m_arisue.jpg'
import servo336 from '../servo336.jpg'
import milkymorii from '../milkymorii.jpg'
import kkorangdrawing from '../kkorangdrawing.jpg'
import kassandra from '../kassandra.jpg'
import miraphosa from '../miraphosa.jpg'
import {Link, NavLink} from 'react-router-dom'

const Explore = () => {
    return(
        <div className="container">
            <h3 class="center">Featured Artists</h3>
            
            <div class="row">
              <div class="col"><Link to="/profile"><img height="250" width="250" src={m_arisue} /></Link><h5>m_arisue</h5><p>Digital Artist</p></div>
              <div class="col"><Link to="/profile"><img height="250" width="250" src={servo336} /></Link><h5>servo336</h5><p>Photographer</p></div>
              <div class="col"><Link to="/profile"><img height="250" width="250" src={milkymorii} /></Link><h5>milkymorii</h5><p>Digital Artist</p></div>
              <div class="col"><Link to="/profile"><img height="250" width="250" src={kkorangdrawing} /></Link><h5>kkorangdrawing</h5><p>Digital Artist</p></div>
              <div class="col"><Link to="/profile"><img height="250" width="250" src={kassandra} /></Link><h5>kassandra.lps.doglover</h5><p>Digital Artist</p></div>
              <div class="col"><Link to="/profile"><img height="250" width="250" src={miraphosa} /></Link><h5>miraphosa</h5><p>Digital Artist</p></div>
            </div>
        
        </div>
    )
}

export default Explore