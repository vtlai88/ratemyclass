import React from 'react';

import './Course_Summary.css';

class Course_Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 'ucla_thtr12',
      departmentCode: 'THTR 12',
      fullCourseName: 'Introduction to Performance',
      courseDescription: 'Lecture, two hours; studio, four hours. Investigation of phenomenon of performance and role of performer in theatrical events, including interpretation of drama through performance. Examination of various forms of theatrical performance and styles of expression, and development of acting, voice, and movement skills.',
    };
  }

  render() {
    return (
      <div>

        {/* Course Summary Section */}
        <section id="course-summary">

          <h5 class="department-code">{this.state.departmentCode}</h5>
          <h2 class="full-course-name">{this.state.fullCourseName}</h2>

          {/*<i class="far fa-heart empty-heart"></i>*/}

          <h5 class="course-summary-label">Course Summary</h5>
          <p class="course-description text-justify">{this.state.courseDescription}</p>

        </section>

      </div>
    );
  }
}

export default Course_Summary;
