import React from "react";

import './classPageucm.css';

import School_Box from './components/School_Box/School_Boxucm';
import Course_Summary from './components/Course_Summary/Course_Summaryucm';

function classPageucm() {
  return (
    <div>

      <div class="container-fluid">

        <School_Box />

        <Course_Summary />

        {/* Tags Section */}
        <section id="tags">

          <h5 class="popular-tags-label">Popular Tags</h5>

          <div class="popular-tags">
            <h5 class="tag-label"><span class="badge badge-pill">Would Take Again</span></h5>
            <h5 class="tag-label"><span class="badge badge-pill">Lecutre Heavy</span></h5>
            <h5 class="tag-label"><span class="badge badge-pill">Attendance Required</span></h5>
          </div>

        </section>

        {/* Scores Section */}
        <section id="scores">

          <h5 class="overall-score-label">Overall Score</h5>
          <h6 class="text-muted"><a href="#" class="text-reset">What do these scores mean?</a></h6>

        </section>

      </div>

      {/* Quick Info Section */}
      <section id="quick-info">

        <div class="row">

          <div class="col-lg-4">
            <h5 class="quick-info-label">Textbook(s) Required</h5>
            <h4 class="quick-info-answer">No</h4>
          </div>

          <div class="col-lg-4">
            <h5 class="quick-info-label">Attendance Required</h5>
            <h4 class="quick-info-answer">No</h4>
          </div>

          <div class="col-lg-4">
            <h5 class="quick-info-label">Hours Spent Per Week</h5>
            <h4 class="quick-info-answer">12</h4>
          </div>

        </div>

      </section>

      <div class="container-fluid">

        {/* Reviews Section */}
        <section id="review-section">

          <h4 class="review-label"><u>Reviews (85)</u></h4>
          <h6 class="filer-label">Filter</h6>
          <h6 class="sorted-label">Sorted By: </h6>

          <div class="dropdown">
            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Most Helpful
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item active">Most Helpful</a>
              <a class="dropdown-item">Newest</a>
              <a class="dropdown-item">Oldest</a>
            </div>
          </div>

          <div class="review">
            {/* reviews */}
          </div>

          <button type="button" class="btn btn-light btn-lg btn-block load-review-button"><h4 class="load-review-label">Load More Reviews</h4></button>

        </section>

        {/* Class Action Section */}
        <section id="class-actions">

          <button type="button" class="btn btn-light btn-lg shadow-sm fav-button"><i class="far fa-heart"></i> Add to Favorites</button>
          <button type="button" class="btn btn-outline-dark btn-lg shadow review-button"><i class="fas fa-plus"></i> Review this Class</button>

        </section>

      </div>

    </div>

  );
};

export default classPageucm;
