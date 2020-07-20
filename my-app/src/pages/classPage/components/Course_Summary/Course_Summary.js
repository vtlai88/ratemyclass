import React from 'react';
import firestore from "../../../../Firestore";
import './Course_Summary.css';
import * as firebase from "firebase/app";

const db = firebase.firestore();


// var docRef = db.collection("colleges").doc("uc davis").collection("department").doc('ECS 32A');
// console.log(docRef);

// db.collection("colleges").doc('uc davis').collection('department').get().then((snapshot)=>{
//   snapshot.docs.forEach(doc=>{
//     console.log(doc.data());
//   });
//    })
// db.collection("colleges").doc("uc davis").collection("department").doc('ECS 32A')
//     .onSnapshot(function(doc) {
//         console.log("Current data: ", doc.data());
//     });



function renderDocs(doc){

}
class Course_Summary extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      department_code: 'THTR 12',
      full_course_name: 'Introduction to Performance',
      course_description: 'Lecture, two hours; studio, four hours. Investigation of phenomenon of performance and role of performer in theatrical events, including interpretation of drama through performance. Examination of various forms of theatrical performance and styles of expression, and development of acting, voice, and movement skills.',
    };

    this.handlePage=()=>{
      db.collection("colleges").doc('uc davis').collection('department').get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
          if(doc.data().dept_code =="MAT 21B"){
            console.log(doc.data())
            this.setState({
            department_code: doc.data().dept_code,
            full_course_name:doc.data().full_name,
            course_description:doc.data().desc,
            });

          }
  
          
        });
      });
    }
    };


  render() {
    return (
      <div>

        {/* Course Summary Section */}
        <section id="course-summary">
        <button onClick={this.handlePage}>Click me!</button>
         

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
