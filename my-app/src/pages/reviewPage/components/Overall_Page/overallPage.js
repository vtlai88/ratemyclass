import React from "react";
import { Form } from "react-bootstrap";
import './overallPage.css';

import Course_Name from '../Course_Name/Course_Name';
import StarRating from '../Star_Rating/starRating';


class Overall extends React.Component  {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitCancel = this.handleSubmitCancel.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/classPage/overall/difficulty');
  }

  handleSubmitCancel(event) {
    event.preventDefault();
    this.props.history.push('/classPage');
  }


  render() {
  return(
    <div>

      <div class="container-fluid">
        
        <Course_Name />

        <section id="overall-section">

         
          <h2 class="overall-label">Overall</h2>
   
          <Form>
            <Form.Group>

              <div class="textbook-section">
                <div class="row">
                  <Form.Label class="textbook-required">Is a textbook required for this class?</Form.Label>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-sm-12">
                    <Form.Check
                      type="radio"
                      label="Yes"
                      name="textbookRadios"
                      id="textbookRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      name="textbookRadios"
                      id="textbookRadios2"
                    />
                  </div>
                </div>
              </div>

              <div class="attendence-section">
                <div class="row">
                  <Form.Label class="attendence-required">Is attendence required for this class?</Form.Label>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-sm-12">
                    <Form.Check
                      type="radio"
                      label="Yes"
                      name="attendenceRadios"
                      id="attendenceRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      name="attendenceRadios"
                      id="attendenceRadios2"
                    />
                    </div>
                  </div>
                </div>
      
              <div class="professor-section">
                <div class="row"> 
                  <Form.Label class="professor-name">Which professor did you take this class with?</Form.Label>
                </div>
                <div class="row">
                  <Form.Control type="professor" placeholder="eg. Professor X" required/>
                </div>
              </div>

              <div class="scale-section">
                <div class="row">
                  <Form.Label class="scale-label">On a scale of 1 to 5, rate your overall experience with this class.</Form.Label>
                </div>
                <div class="row">
                  <StarRating />
                </div>
              </div>

              <div class="experience-section">
                <div class="row">
                  <Form.Label class="experience-label">Describe your experience</Form.Label>
                </div>
                <div class="row">
                  <Form.Control as="textarea" rows="6" placeholder="What did you like about this course? What changes would you like to see?" required/>
                </div>
              </div>
       
            </Form.Group>
          </Form>
        </section>

        <section id="class-actions">

          <div class="row justify-content-center">
            <div class="col-4">
              <button type="button" onClick={this.handleSubmitCancel} class="btn btn-light btn-lg btn-block shadow-sm fav-button">Cancel</button>
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

export default Overall;
