

import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
           <div className="form">     
                <h1>Week 3</h1>
                <div className="left">Username: </div>
                <div className="Right "> <input type="text" placeholder="Please enter your Name"/></div>
                <div className="left ">Password: </div>
                <div className="Right"> <input type="text" placeholder="Please enter your password"/></div>
                <button className="green">Login</button>
                <br/>
                <div>
                    <input type="checkbox"  className="check" name="" id=""/><h3>Remember me</h3>
                    <button className="cancelBtn">Cancel</button>
                </div>
                
           </div>
        )
    }
}

export default Form;


