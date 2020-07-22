import React from "react";
import "./review.css";
import Course_Name from '../Course_Name/Course_Name';


class Difficulty extends React.Component  {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitBack = this.handleSubmitBack.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/schoolPage/classPage');
  }

  handleSubmitBack(event) {
  event.preventDefault();
  this.props.history.push('/schoolPage/classPage/overall/difficulty/workload/useful');
  }
  
  render() {
    return(
      <div>

      <div class="container-fluid">
        
        {/* title */}
        <section id="title-section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col align-self-start">
                <Course_Name />
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col align-self-start">
                <h2>Review</h2>
              </div>
            </div>
          </div>
        </section>
   
        {/* each of the review component */}
        <section id="review-section">
          <div class="section-box">

            <div class="row">
              <div class="col">
                <div class="circle-block score-circle-review overall-box">4.0</div>
              </div>
              <div class="col-6">
                <h2>Overall</h2>
                <div class="input-review">
                I think class provided a lot of insights into what it’s actually like to perform on stage or in film.
                </div>
                </div>
              <div class="col">
                <a href="#" class="edit-link"><x-large>Edit</x-large></a>
              </div>
            </div>
          </div>

          <div class="section-box">
            <div class="row">
              <div class="col">
                <div class="circle-block score-circle-review  difficulty-box">4.0</div>
              </div>
              <div class="col-6">
                <h2>Difficulty</h2>
                <div class="input-review">
                I never had a lot of trouble working through the assignments for this class. It definitely requires a lot of time outside of class, but it’s fun work.
                </div>
                </div>
              <div class="col">
                <a href="#" class="edit-link"><x-large>Edit</x-large></a>
              </div>
            </div>
          </div>

          <div class="section-box">
            <div class="row">
              <div class="col">
                <div class="circle-block score-circle-review workload-box">4.0</div>
              </div>
              <div class="col-6">
                <h2>Workload</h2>
                <div class="input-review">
                To get a good grade in this class, you have to work for it. There’s a time commitment outside of class. If you have a lot of extracurriculars I would suggest you find a way to make some time for this class because you will need it!
                </div>
                </div>
              <div class="col">
                <a href="#" class="edit-link"><x-large>Edit</x-large></a>
              </div>
            </div>
          </div>

          <div class="section-box">
            <div class="row">
              <div class="col">
                <div class="circle-block score-circle-review useful-box">4.0</div>
              </div>
              <div class="col-6">
                <h2>Usefulness</h2>
                <div class="input-review">
                I have several friends who work in the industry and graduated from UCLA that still talk about the amazing things they learned from this class. I didn’t take the same professor but it really do feel like I can use this material in the workforce.                      </div>
                </div>
              <div class="col">
                <a href="#" class="edit-link"><x-large>Edit</x-large></a>
              </div>
            </div>
          </div>

        </section>
      </div>


        {/* bottom buttons */}
        <section id="class-actions">
          <div class="row justify-content-center">
            <div class="col-4">
              <button type="button" onClick={this.handleSubmitBack} class="btn btn-light btn-lg btn-block shadow-sm backButton">Back</button>
            </div>
            <div class="col-4">
              <button type="button" onClick={this.handleSubmit} class="btn btn-outline-dark btn-lg btn-block shadow forwardButton">Review</button>
            </div>
          </div>
        </section>
      
      </div>
    )
  }
}

export default Difficulty;


