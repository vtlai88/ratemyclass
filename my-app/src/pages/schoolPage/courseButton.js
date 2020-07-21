import React from 'react';

import './courseButton.css';

class CourseButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 'ucla_thtr12',
      department_code: 'THTR 12',
      full_course_name: 'Introduction to Performance',
    };
  }

  render() {
    return (
      <div>

        {/* Course Button Section */}
        <section id="course-summary">

          <h5 class="department-code">{this.state.department_code}</h5>
          <h2 class="full-course-name">{this.state.full_course_name}</h2>

          {/* <i class="far fa-heart empty-heart"></i> */}

        </section>

      </div>
    );
  }
}

export default CourseButton;
