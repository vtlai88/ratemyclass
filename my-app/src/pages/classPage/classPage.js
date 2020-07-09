import React from "react";

import './classPage.css';

function classPage() {
  return (
    <div class="container">

      {/* School Summary Section */}
      <section id="school-summary">

        <div class="card school-summary-card">
          <div class="row no-gutters">
            <div class="col">
              <img src="..." class="card-img" alt="..."></img>
            </div>
            <div class="col-lg-10">
              <div class="card-body">
                <h5 class="card-title">University of California Los Angeles</h5>
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

        <h5 class="course-summary-label">Course Summary</h5>
        <p class="course-description">Lecture, two hours; studio, four hours. Investigation of phenomenon of performance and role of performer in theatrical events, including interpretation of drama through performance. Examination of various forms of theatrical performance and styles of expression, and development of acting, voice, and movement skills.</p>

      </section>

      {/* Tags Section */}
      <section id="tags">

        <h5 class="popular-tags-label">Popular Tags</h5>

        <ul class="popular-tags">
          <span class="badge badge-pill badge-success">Lecutre Heavy</span>
          <span class="badge badge-pill badge-success">Attendance Required</span>
          <span class="badge badge-pill badge-success">Would Take Again</span>
        </ul>

      </section>

    </div>
  );
};

export default classPage;
