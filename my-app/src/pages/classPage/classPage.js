import React from "react";

import './classPage.css';

import School_Box from './components/School_Box/School_Box';
import Course_Summary from './components/Course_Summary/Course_Summary';
import Review_List from './components/Review_List/Review_List';
import Review from './components/Review/Review';
import { withRouter } from 'react-router-dom';

class classPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [<Review />, <Review />, <Review />],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/classPage/overall');
  }

  render() {
    return (
      <div>

        <div class="container-fluid">

          <School_Box />

          <Course_Summary />

          {/* Tags Section */}
          <section id="tags">

            <h5 class="popular-tags-label">Popular Tags</h5>
            <div class="row m-0 popular-tags">
              <button type="button" class="btn btn-light mr-2 tag">Would Take Again</button>
              <button type="button" class="btn btn-light mr-2 tag">Lecture Heavy</button>
              <button type="button" class="btn btn-light mr-2 tag">Attendance Required</button>
            </div>

          </section>

          {/* Scores Section */}
          <section id="scores">

            <h5 class="overall-score-label">Overall Score</h5>
            <h6 class="text-muted"><a href="#" class="text-reset" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">What do these scores mean?</a></h6>

          </section>

        </div>

        {/* Quick Info Section */}
        <section id="quick-info">

          <div class="row">

            <div class="col-lg-4">
              <h5 class="quick-info-label">Textbook(s) Required</h5>
              <h4 class="quick-info-answer">Yes</h4>
            </div>

            <div class="col-lg-4">
              <h5 class="quick-info-label">Attendance Required</h5>
              <h4 class="quick-info-answer">Yes</h4>
            </div>

            <div class="col-lg-4">
              <h5 class="quick-info-label">Hours Spent Per Week</h5>
              <h4 class="quick-info-answer">10</h4>
            </div>

          </div>

        </section>

        <div class="container-fluid">

          {/* Reviews Section */}
          <section id="review-section">

            <div class="row">
              <div class="col-md-6">
                <h4 class="review-label"><u>Reviews</u></h4>
              </div>

            </div>

            <Review_List reviews={this.state.reviews}/>

            <button type="button" class="btn btn-light btn-lg btn-block load-review-button"><h4 class="load-review-label">Load More Reviews</h4></button>

          </section>

          {/* Class Action Section */}
          <section id="class-actions">

            <div class="row">
              <div class="col-lg-6 col-sm-12">
                <button type="button" class="btn btn-light btn-lg btn-block shadow-sm fav-button"><i class="far fa-heart"></i> Add to Favorites</button>
              </div>
              <div class="col-lg-6 col-sm-12">
                <button type="button" onClick={this.handleSubmit} class="btn btn-outline-dark btn-lg btn-block shadow review-button"><i class="fas fa-plus"></i> Review this Class</button>
              </div>
            </div>

          </section>

        </div>

      </div>

    );
  }

};


export default withRouter(classPage);
