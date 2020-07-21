import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'
import m_arisue from '../m_arisue.jpg'

class Review extends Component {
    render() {
        const imageClick = (e) => {
            console.log(this.state);
        }
        
      return (
        <div className="container">
            <h3 className="center">Leave a Review For m_arisue!</h3>
            <div className="center">
                <div class="row valign-wrapper">
                    <div class="col right-align">
                        <Link to="/profile"><img height="250" width="250" src={m_arisue} /></Link>
                    </div>
                    <div class="col s8 border2" style={{flex: 1, flexWrap: 'wrap'}}>
                        <br/><p>Hello! Please feel free to leave a review for me! Let me know if you enjoyed my art, or if there are any improvments I can make for next time! :)</p>
                        <br/>
                    </div>
                </div>
            </div>
            
            <div class="center">
        
                <div class="row">
                    <h5>Please fill out the following form to submit your request!</h5>
                </div>
            </div>

            <form class="container border" action="#">

                <h5>Rate this user!</h5>
                <h2 class="center">{"\u2b50"}{"\u2b50"}{"\u2b50"}{"\u2b50"}{"\u2b50"}</h2>

                {/*Comment Box 1*/}
                <h5>Write a Review!</h5>

                
                    <div class="row border2">
                        <div class="col s12">
                            <div class="input-field">
                            <textarea placeholder="Insert your text here!" id="textarea1" class="materialize-textarea"></textarea>
                            
                            </div>
                        </div>
                    </div>
                
                <div class="center">
                    <h6>Thank you for your feedback! Hope to see you again soon! :)</h6>   
                    <br/>
                    <Link to="/profile"><button class="btn blue lighten-1 btn-large">Submit Review!</button></Link>
                </div>
                <br/>
            </form>
            <br/><br/>
        </div>
    );
    }
}

export default Review