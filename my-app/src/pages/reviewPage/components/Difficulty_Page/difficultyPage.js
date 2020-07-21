import React from "react";
import { Form } from "react-bootstrap";
import './difficultyPage.css';

import Course_Name from '../Course_Name/Course_Name';
import StarRating from '../Star_Rating/starRating';



class Difficulty extends React.Component  {
    constructor(props) {
      super(props);
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSubmitBack = this.handleSubmitBack.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.history.push('/schoolPage/classPage/overall/difficulty/workload');
    }


    handleSubmitBack(event) {
    event.preventDefault();
    this.props.history.push('/schoolPage/classPage/overall');
    }
    
    render() {
        return(
            <div>

            <div class="container-fluid">
              
              <Course_Name />
      
              <section id="difficulty-section">
      
               
                <h2 class="difficulty-label">Difficulty</h2>
         
                <Form>
                  <Form.Group>
      
                    <div class="scale-section">
                      <div class="row">
                        <Form.Label class="scale-label">On a scale of 1 to 5, rate how difficult you found this course.</Form.Label>
                      </div>
                      <div class="row">
                        <StarRating />
                      </div>
                    </div>
      
                    <div class="experience-section">
                      <div class="row">
                        <Form.Label class="experience-label">Explain your rating.</Form.Label>
                      </div>
                      <div class="row">
                        <Form.Control as="textarea" rows="6" placeholder="What made the class easy or difficult for you? Why?" required/>
                      </div>
                    </div>
             
                  </Form.Group>
                </Form>
              </section>
      
              <section id="class-actions">
      
              <div class="row justify-content-center">
                 <div class="col-4">
                    <button type="button" onClick={this.handleSubmitBack} class="btn btn-light btn-lg btn-block shadow-sm fav-button">Back</button>
                  </div>
                  <div class="col-4">
                    <button type="button" onClick={this.handleSubmit} class="btn btn-outline-dark btn-lg btn-block shadow review-button">Next</button>
                  </div>
                </div>
      
              </section>
         
            </div>
          </div>
      
         )
    }
}

export default Difficulty;


