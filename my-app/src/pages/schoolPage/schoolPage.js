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
                <h5 class="department-code">College of Theater, Film, and Television</h5>

            </section>
            
            
            
            <div class="card mb-3" >
                <div class="card-body">
                    <h5 class="card-title">Top Rated Courses</h5>
                    <div class="row m-0">
                    <div class="card-body" href="#" class="btn btn-light">
                        <CourseButton/>
                    </div>
                    <div class="card-body" href="#" class="btn btn-light">
                        <CourseButton/>
                    </div>
                </div>

                </div>
                </div>
                <div class="card">
                <div class="card-body" href="#" class="btn btn-light">
                    <h5 class="card-title">Most Useful Courses</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
        
                </div>
                <div class="card w-75">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
                </div>

                </div>
            </div>
      

    );
}
export default schoolPage;