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
      text_review: 'This was a good class.',
    };
  }

  render() {
    return (
      <div class="card m-0 review">
        <div class="card-body">
          <div class="col">
            <span class="dot overall-score-circle"></span>
            <h5>Overall Score</h5>
          </div>

          <h6 class="date">{this.state.date}</h6>

        </div>
      </div>
    );
  }
}

export default Review;
