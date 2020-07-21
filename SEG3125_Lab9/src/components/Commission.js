import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'
import m_arisue from '../m_arisue.jpg'
import banner from '../banner.jpg'

class Commission extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            fields: {},
            errors: {}
        }
     }
 
     handleValidation(){
         let fields = this.state.fields;
         let errors = {};
         let formIsValid = true;
 
         //Email
         if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Cannot be empty";
         }
 
         if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');
 
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
               formIsValid = false;
               errors["email"] = "Email is not valid";
             }
        }  
 
        this.setState({errors: errors});
        return formIsValid;
    }
 
    contactSubmit(e){
         e.preventDefault();
 
         if(this.handleValidation()){
            alert("Your form has been submitted! Thank you for using Kappa Art! :)");
         }else{
            alert("Please fill out all requirements in the form!")
         }
 
     }
 
     handleChange(field, e){         
         let fields = this.state.fields;
         fields[field] = e.target.value;        
         this.setState({fields});
     }

    render() {
        const imageClick = (e) => {
            console.log(this.state);
        }
        
      return (
        <div className="container">
            <h3 className="center">m_arisue's Commission Form</h3>
            <div className="center">
                <div class="row valign-wrapper">
                    <div class="col right-align">
                        <Link to="/profile"><img height="250" width="250" src={m_arisue} /></Link>
                    </div>
                    <div class="col s8 border2" style={{flex: 1, flexWrap: 'wrap'}}>
                        <br/><p>Hello! Thank you for commissioning me! Please select what type of commission you'd like me to draw in the form below, and I will get back to you shortly upon submission!</p>
                        <br/>
                    </div>
                </div>
            </div>
            
            <div class="center">
              <div class="col border"><img height="325" width="1000" src={banner} /></div>
                <div class="row">
                    <h5>Please fill out the following form to submit your request!</h5>
                </div>
            </div>

            <form name="contactform" class="container border" action="#" onSubmit= {this.contactSubmit.bind(this)}>
                
                {/*Text Inputs*/}
                <div class="row">
                    <div class="input-field col s6">
                    <label for="username">Username</label>
                    <br/>
                    <input placeholder="m_arisue" id="username" type="text" class="validate"/>
                    </div>
                    <div class="input-field col s6">
                    <label for="last_name">Email Address</label>
                    <br/>
                    <input refs="email" placeholder="m_arisue@KappaArt.ca" id="email" type="email" class="validate" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                    <span class="helper-text">Please note that your email address is required to verify paypal payments{this.state.errors["email"]}</span>
                    
                    </div>
                </div>

                {/*Radio Buttons*/}
                <h6>Type of Commission</h6>
                <p>
                    <label>
                        <input class="with-gap" name="group1" type="radio"  />
                        <span>Bust Shot - $15</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input class="with-gap" name="group1" type="radio"  />
                        <span>Circular Profile - $25</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input class="with-gap" name="group1" type="radio"  />
                        <span>Polaroids - $35</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input class="with-gap" name="group1" type="radio"  />
                        <span>Detailed Illustration - $50</span>
                    </label>
                </p>
            
                {/*Drop Down*/}
                <h6>How many characters would you like drawn?</h6>
                Please note that any additional characters will result in extra fees!
                <div class="row">
                    <div class="col s2">
                        <select class="browser-default">
                            <option value="" disabled selected>1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                            <option value="3">5</option>
                            <option value="3">6</option>
                            <option value="3">7</option>
                            <option value="3">8</option>
                            <option value="3">9</option>
                            <option value="3">10</option>
                        </select>
                    </div>
                </div>

                {/*Comment Box 1*/}
                <h6>Character Personalities</h6>
                <p>Please provide 1 or 2 senteces describing your character so that I can have a better grasp of what I am drawing!</p>

                    <div class="row">
                        <div class="col s8 offset-s2">
                            <div class="input-field col s8 offset-s2">
                            <textarea placeholder="Insert your text here!" id="textarea1" class="materialize-textarea"></textarea>
                            
                            </div>
                        </div>
                    </div>

                {/*Comment Box 2*/}
                <h6>Additional Information/Requests</h6>
                <p>Are there any additional details you'd like me to add or emphasize on?</p>

                    <div class="row">
                        <div class="col s8 offset-s2">
                            <div class="input-field col s8 offset-s2">
                            <textarea placeholder="Insert your text here!" id="textarea1" class="materialize-textarea"></textarea>
                            
                            </div>
                        </div>
                    </div>

                
                <div class="center">
                    <h6>Thank you for filling out the Commission Form! Once you have submitted your form, I will get back to you shortly with updates on the commission slot! :)</h6>   
                    <br/>
                    <button class="btn blue lighten-1 btn-large">Submit!</button>
                </div>
                <br/>
            </form>
            
        </div>
    );
    }
}

export default Commission