import React from 'react';

import './Course_Name.css';

class Course_Name extends React.Component {
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

        {/* Course Summary Section */}
        <section id="class-name">

          <h5 class="dept-code">{this.state.department_code}</h5>
          <h2 class="course-name">{this.state.full_course_name}</h2>

        </section>

      </div>
    );
  }
}

export default Course_Name;
