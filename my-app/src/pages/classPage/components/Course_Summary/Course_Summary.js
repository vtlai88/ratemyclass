import React from 'react';

import './Course_Summary.css';

class Course_Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      department_code: 'THTR 12',
      full_course_name: 'Introduction to Performance',
      course_description: 'Lecture, two hours; studio, four hours. Investigation of phenomenon of performance and role of performer in theatrical events, including interpretation of drama through performance. Examination of various forms of theatrical performance and styles of expression, and development of acting, voice, and movement skills.',
    };
  }

  render() {
    return (
      <div>

        {/* Course Summary Section */}
        <section id="course-summary">

          <h5 class="department-code">{this.state.department_code}</h5>
          <h2 class="full-course-name">{this.state.full_course_name}</h2>

          {/*<i class="far fa-heart empty-heart"></i>*/}

          <h5 class="course-summary-label">Course Summary</h5>
          <p class="course-description">{this.state.course_description}</p>

        </section>

      </div>
    );
  }
}

export default Course_Summary;
