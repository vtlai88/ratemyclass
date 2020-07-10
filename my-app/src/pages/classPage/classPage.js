import React from "react";

import './classPage.css';

function classPage() {
  return (
    <div>

      <div class="container-fluid">

        {/* School Summary Section */}
        <section id="school-summary">

          <div class="card shadow-sm bg-white rounded school-summary-card">
            <div class="row no-gutters">

              <div class="col">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/UCLA_Bruins_script.svg/250px-UCLA_Bruins_script.svg.png" class="card-img college-logo" alt="UCLA Logo"></img>
              </div>

              <div class="col-lg-10 school-info">
                <div class="card-body">
                  <h5 class="card-title">University of California - Los Angeles</h5>
                  <p class="card-text text-muted">College of Theater, Film, and Television</p>
                  <a href="#" class="card-link"><small>Change</small></a>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Course Summary Section */}
        <section id="course-summary">

          <h5 class="department-code text-muted">THTR 12</h5>
          <h2 class="full-course-name">Introduction to Performance</h2>

          {/*<i class="far fa-heart empty-heart"></i>*/}

          <h5 class="course-summary-label">Course Summary</h5>
          <p class="course-description">Lecture, two hours; studio, four hours. Investigation of phenomenon of performance and role of performer in theatrical events, including interpretation of drama through performance. Examination of various forms of theatrical performance and styles of expression, and development of acting, voice, and movement skills.</p>

        </section>

        {/* Tags Section */}
        <section id="tags">

          <h5 class="popular-tags-label">Popular Tags</h5>

          <div class="popular-tags">
            <h5><span class="badge badge-pill badge-info">Would Take Again</span></h5>
            <h5><span class="badge badge-pill badge-info">Lecutre Heavy</span></h5>
            <h5><span class="badge badge-pill badge-info">Attendance Required</span></h5>
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
            <h4 class="text-muted">Textbook(s) Required</h4>
            <h4>Yes</h4>
          </div>

          <div class="col-lg-4">
            <h4 class="text-muted">Attendance Required</h4>
            <h4>Yes</h4>
          </div>

          <div class="col-lg-4">
            <h4 class="text-muted">Hours Spent Per Week</h4>
            <h4>10</h4>
          </div>

        </div>

      </section>

      <div class="container-fluid">

        {/* Reviews Section */}
        <section id="review-section">

          <h4><u>Reviews (85)</u></h4>
          <h6>Filter</h6>
          <h6>Sorted By: </h6>

          <div class="review">

          </div>

          <button type="button" class="btn btn-light btn-lg btn-block load-more-button"><h4>Load More Reviews</h4></button>

        </section>

        {/* Class Action Section */}
        <section id="class-actions">

          <button type="button" class="btn btn-light btn-lg shadow-sm fav-button">Add to Favorites</button>
          <button type="button" class="btn btn-outline-dark btn-lg shadow review-button">Review this Class</button>

        </section>

      </div>

    </div>

  );
};

export default classPage;
