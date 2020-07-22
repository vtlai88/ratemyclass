import React from "react";

import './schoolPage.css';
import ucla from '../schoolPhotos/ucla.jpeg';
import CourseButton from './courseButton';
import { withRouter } from 'react-router-dom';

// function schoolPage(){
//     return (
//         <div>
//         {/* School Summary Section */}
//         <img className = "school-photo"src ={ucla} alt="ucla banner"/>
//         <div class="container-fluid">
//             <section id="school-summary">

//                 <h2 class="full-course-name">University of California - Los Angeles</h2>
//                 <h5 class="department">College of Theater, Film, and Television</h5>

//             </section>
            
//             <div class="card mb-3" >
//                 <div class="card-body">
//                     <h5 class="card-title">Top Rated Courses</h5>
//                     <div class="row m-0">
//                         <CourseButton score='5.9'/>
//                         <CourseButton score='3.2'/>
//                 </div>
//                 <div class="row m-0">
//                         <CourseButton/>
//                         <CourseButton/>
//                 </div>

//                 </div>
//                 </div>
//                 <div class="card mb-3" >
//                 <div class="card-body">
//                     <h5 class="card-title">Most Useful Courses</h5>
//                     <div class="row m-0">
//                         <CourseButton/>
//                         <CourseButton/>
//                 </div>
//                 <div class="row m-0">
//                         <CourseButton/>
//                         <CourseButton/>
//                 </div>

//                 </div>
//                 </div>

//                 <div class="card mb-3" >
//                 <div class="card-body">
//                     <h5 class="card-title">Hardest Courses</h5>
//                     <div class="row m-0">
//                         <CourseButton/>
//                         <CourseButton/>
//                 </div>
//                 <div class="row m-0">
//                         <CourseButton/>
//                         <CourseButton/>
//                 </div>

//                 </div>
//                 </div>

   

//                 </div>
//             </div>
      

//     );
// }
// export default schoolPage;

class schoolPage extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        courses: [<CourseButton score='5.0' />, <CourseButton score='3.0' />, <CourseButton score='3.0' />],

      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.history.push('/schoolPage/classPage');
    }
  
    render() {
      return (
        <div>
        {/* School Summary Section */}
        <img className = "school-photo"src ={ucla} alt="ucla banner"/>
        <div class="container-fluid">
            <section id="school-summary">

                <h2 class="full-course-name">University of California - Los Angeles</h2>
                <h5 class="department">College of Theater, Film, and Television</h5>

            </section>
            
            <div class="card mb-3" >
                <div class="card-body">
                    <h5 class="card-title">Top Rated Courses</h5>
                    <div class="row m-0">
                        <CourseButton/>
                        <div class="card mb-3" style={{width: '540px'}} href="#" class="btn btn-light" onClick={this.handleSubmit}>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <div class="circle score-circ">3.2</div>
                        </div>
                        <div class="col-md-8">
                            
                        <div class="card-body">
                        
                        <section id="course-summary">
                            

                            <h5 class="department-code">THTR 13</h5>
                            <h2 class="full-course-name">Play Reading and Analysis</h2>

                            {/* <i class="far fa-heart empty-heart"></i> */}

                            </section>

                        </div>
                        </div>
                    </div>
            </div>
                </div>
                <div class="row m-0">
                        <div class="card mb-3" style={{width: '540px'}} href="#" class="btn btn-light" onClick={this.handleSubmit}>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <div class="circle score-circ">4.2</div>
                        </div>
                        <div class="col-md-8">
                            
                        <div class="card-body">
                        
                        <section id="course-summary">
                            

                            <h5 class="department-code">THTR 102A</h5>
                            <h2 class="full-course-name">Acting and Performance in...</h2>

                            {/* <i class="far fa-heart empty-heart"></i> */}

                            </section>

                        </div>
                        </div>
                    </div>
            </div>
                        <div class="card mb-3" style={{width: '540px'}} href="#" class="btn btn-light" onClick={this.handleSubmit}>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <div class="circle score-circ">4.9</div>
                        </div>
                        <div class="col-md-8">
                            
                        <div class="card-body">
                        
                        <section id="course-summary">
                            

                            <h5 class="department-code">THTR 20</h5>
                            <h2 class="full-course-name">Acting Fundamentals</h2>

                            {/* <i class="far fa-heart empty-heart"></i> */}

                            </section>

                        </div>
                        </div>
                    </div>
            </div>
                </div>

                </div>
                </div>
                <div class="card mb-3" >
                <div class="card-body">
                    <h5 class="card-title">Most Useful Courses</h5>
                    <div class="row m-0">
                    <div class="card mb-3" style={{width: '540px'}} href="#" class="btn btn-light" onClick={this.handleSubmit}>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <div class="circle score-circ">4.4</div>
                        </div>
                        <div class="col-md-8">
                            
                        <div class="card-body">
                        
                        <section id="course-summary">
                            

                            <h5 class="department-code">THTR 14C</h5>
                            <h2 class="full-course-name">Introduction to Design</h2>

                            {/* <i class="far fa-heart empty-heart"></i> */}

                            </section>

                        </div>
                        </div>
                    </div>
            </div>
                    <div class="card mb-3" style={{width: '540px'}} href="#" class="btn btn-light" onClick={this.handleSubmit}>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <div class="circle score-circ">4.3</div>
                        </div>
                        <div class="col-md-8">
                            
                        <div class="card-body">
                        
                        <section id="course-summary">
                            

                            <h5 class="department-code">ENGL 157</h5>
                            <h2 class="full-course-name">Philosophy</h2>

                            {/* <i class="far fa-heart empty-heart"></i> */}

                            </section>

                        </div>
                        </div>
                    </div>
            </div>
                </div>
                <div class="row m-0">
                        <CourseButton/>
                        <CourseButton/>
                </div>

                </div>
                </div>

                <div class="card mb-3" >
                <div class="card-body">
                    <h5 class="card-title">Hardest Courses</h5>
                    <div class="row m-0">
                        <CourseButton/>
                        <CourseButton/>
                </div>
                <div class="row m-0">
                        <CourseButton/>
                        <CourseButton/>
                </div>

                </div>
                </div>

   

                </div>
            </div>
        
  
      );
    }
  
  };
  
  
  export default withRouter(schoolPage);