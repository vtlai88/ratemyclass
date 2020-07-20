import React from 'react';
import './Review.css';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      date: 'June 25, 2020',
      up_votes: 10,
      down_votes: 2,
      overall_score: 8.9,
      class_difficulty: 7.0,
      usefullness: 5.5,
      interesting: 6.0,
      text_review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    };
  }

  render() {
    return (
      <div class="card mt-4 review">
        <div class="card-body">

          <h5 class="overall-score-label">Overall Score</h5>
          <h6 class="date">{this.state.date}</h6>
          <h5 class="up-vote"></h5>
          <button type="button" class="btn btn-outline-success btn-sm up-vote-button">{this.state.up_votes}   <i class="far fa-thumbs-up"></i></button>
          <button type="button" class="btn btn-outline-danger btn-sm down-vote-button">{this.state.down_votes}   <i class="far fa-thumbs-down"></i></button>
          <h5 class="overall-experience-label">Overall Experience</h5>
          <h5 class="text-review">{this.state.text_review}</h5>
          <h4 class="class-difficulty-label">Class Difficulty</h4>
          <h4 class="usefullness-label">Usefullness</h4>
          <h4 class="interesting-label">Interesting</h4>

        </div>
      </div>
    );
  }
}

export default Review;
