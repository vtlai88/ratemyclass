import React from "react";

import './schoolPage.css';
import ucla from '../schoolPhotos/ucla.jpeg';
import { Container, Row, Col } from 'reactstrap';
import CourseButton from './courseButton';
import ScoreCircle from '../classPage/components/ScoreCircle/ScoreCircle'

function schoolPage(){
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
                        <CourseButton/>
                </div>
                <div class="row m-0">
                        <CourseButton/>
                        <CourseButton/>
                </div>

                </div>
                </div>
                <div class="card mb-3" >
                <div class="card-body">
                    <h5 class="card-title">Most Useful Courses</h5>
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
export default schoolPage;