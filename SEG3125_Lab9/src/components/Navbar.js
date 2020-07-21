import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return(

        <div class="navbar-fixed">
        <nav className="nav-wrapper blue lighten-3">
            <div className="container">
                <div class="row ">
                    <div class="col offset">
                        <a className="brand-logo" href="/">Kappa Art</a>
                    </div>
                    <div class="col offset-s2">
                        <ul>
                            <li><Link to="/explore"><h7>Explore</h7></Link></li>
                            <li><a href="#"><i class="material-icons">search</i></a></li>
                        </ul>
                    </div>
                    <div class="col offset-s5">
                        <ul>
                            <li><Link to="/profile"><h7>English</h7></Link></li>
                            <li><Link to="/french"><h7>Fran{"\u00E7"}ais</h7></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
                        
        </nav>
        </div>
    )
}

export default Navbar