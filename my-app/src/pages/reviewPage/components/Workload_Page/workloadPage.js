import React from "react";
import { Form } from "react-bootstrap";
import './workloadPage.css';

import Course_Name from '../Course_Name/Course_Name';
import StarRating from '../Star_Rating/starRating';



class Workload extends React.Component  {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitBack = this.handleSubmitBack.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/schoolPage/classPage/overall/difficulty/workload/useful');
  }


  handleSubmitBack(event) {
  event.preventDefault();
  this.props.history.push('/schoolPage/classPage/overall/difficulty/');
  }
  
  render() {
    return(
      <div>
      <div class="container-fluid">

      <Form>
        <Form.Group>

        {/* title portion */}
        <div class="row">
          <Course_Name />
        </div>
        <div class="row">
          <h2>Workload</h2>
        </div>

        {/* Question Part */}
        <div class="hours-section">
            <div class="row">
              <Form.Label class="hours-label">How many hours a week did you spend on class work?</Form.Label>
            </div>
            <div class="row">
              <Form.Control type="hours" placeholder="eg. 10" required/>
            </div>
          </div>

          <div class="scale-section">
            <div class="row">
              <Form.Label class="scale-label">On a scale of 1 to 5, rate how much work you had in this class.</Form.Label>
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
              <Form.Control as="textarea" rows="6" placeholder="What type of work did you have in this course?" required/>
            </div>
          </div>
        
          </Form.Group>
        </Form>
        
        {/* bottom buttons */}
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

export default Workload;

