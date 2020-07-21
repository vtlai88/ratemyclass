import React from "react";
import { Form } from "react-bootstrap";
import './review.css';

import Course_Name from '../Course_Name/Course_Name';




class Difficulty extends React.Component  {
    constructor(props) {
      super(props);
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSubmitBack = this.handleSubmitBack.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.history.push('/schoolPage/classPage');
    }


    handleSubmitBack(event) {
    event.preventDefault();
    this.props.history.push('/schoolPage/classPage/overall/difficulty/workload');
    }
    
    render() {
        return(
            <div>

            <div class="container-fluid">
              
              <Course_Name />
      
              <section id="review-section">
      
               
                <h2 class="review-label">Review</h2>
         
                </section>
            </div>
              <section id="class-actions">
      
              <div class="row justify-content-center">
                <div class="col-4">
                    <button type="button" onClick={this.handleSubmitBack} class="btn btn-light btn-lg btn-block shadow-sm backButton">Back</button>
                  </div>
                  <div class="col-4">
                    <button type="button" onClick={this.handleSubmit} class="btn btn-outline-dark btn-lg btn-block shadow forwardButton">Review</button>
                  </div>
                </div>
      
              </section>
         
            </div>
     
      
         )
    }
}

export default Difficulty;


