import React from "react";
import { Form } from "react-bootstrap";
import './usefulPage.css';
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
    this.props.history.push('/schoolPage/classPage/overall/difficulty/workload/useful/review');
  }

  handleSubmitBack(event) {
  event.preventDefault();
  this.props.history.push('/schoolPage/classPage/overall/difficulty/workload/');
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
            <h2>Usefulness</h2>
          </div>

          {/* Question Part */}
          <div class="scale-section">
            <div class="row">
              <Form.Label class="scale-label">On a scale of 1 to 5, rate how much useful you found in this class.</Form.Label>
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
              <Form.Control as="textarea" rows="6" placeholder="What specifically prompted you to decide this class was useful or not?" required/>
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
              <button type="button" onClick={this.handleSubmit} class="btn btn-outline-dark btn-lg btn-block shadow review-button">Review</button>
            </div>
          </div>
        </section>
        
        </div>
      </div>
    
      )
  }
}

export default Workload;

