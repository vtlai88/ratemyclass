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
          <div class="card mb-3" style={{width: '540px'}} href="#" class="btn btn-light">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                        <div class="circle score-circle">5.2</div>
                        </div>
                        <div class="col-md-8">
                            
                        <div class="card-body">
                        
                        <section id="course-summary">
                            

                            <h5 class="department-code">{this.state.department_code}</h5>
                            <h2 class="full-course-name">{this.state.full_course_name}</h2>

                            {/* <i class="far fa-heart empty-heart"></i> */}

                            </section>

                        </div>
                        </div>
                    </div>
                    </div>

        {/* Course Button Section */}
        

      </div>
    
    );
  }
}

export default CourseButton;
