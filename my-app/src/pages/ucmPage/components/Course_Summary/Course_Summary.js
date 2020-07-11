import React from 'react';

import './Course_Summary.css';

class Course_Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      department_code: 'CSE 30',
      full_course_name: 'Data Structures',
      course_description: 'Lecture, 4 hours, plus Supplementary Activity. The main focus of this course is on the design, analysis, and implementation of fundamental data structures, design patterns, and algorithms used throughout computer science, including linked lists, stacks, queues, trees, hash tables, graphs, recursion, and methods for searching and sorting..',
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
