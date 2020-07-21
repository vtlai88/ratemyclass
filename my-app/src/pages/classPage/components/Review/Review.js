import React from 'react';

import './Review.css';

import ScoreCircle from '../ScoreCircle/ScoreCircle';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      date: 'June 25, 2020',
      upVotes: 10,
      isUpVote: false,
      downVotes: 2,
      isDownVote: false,
      overallScore: 4.8,
      classDifficulty: 3.2,
      usefulness: 2.2,
      interesting: 4.7,
      textReview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    };

    this.handleUpVoteClick = this.handleUpVoteClick.bind(this);
    this.handleDownVoteClick = this.handleDownVoteClick.bind(this);
  }

  handleUpVoteClick(e) {
    this.setState(state => ({
      upVotes: this.state.isUpVote ? this.state.upVotes - 1 : this.state.upVotes + 1,
      isUpVote: !this.state.isUpVote
    }));
  }

  handleDownVoteClick(e) {
    this.setState(state => ({
      downVotes: this.state.isDownVote ? this.state.downVotes - 1 : this.state.downVotes + 1,
      isDownVote: !this.state.isDownVote
    }));
  }

  render() {
    return (
      <div class="card mt-4 review">
        <div class="card-body">

          <div class="circle overall-score-circle">{this.state.overallScore}</div>
          <h5 class="overall-score-label">Overall Score</h5>

          <h6 class="date">{this.state.date}</h6>

          <button type="button" onClick={this.handleUpVoteClick} class={`btn btn-outline-success btn-sm ${this.state.isUpVote ? "active" : ""} up-vote-button`} aria-pressed="true">{this.state.upVotes}   <i class="far fa-thumbs-up"></i></button>
          <button type="button" onClick={this.handleDownVoteClick} class={`btn btn-outline-danger btn-sm ${this.state.isDownVote ? "active" : ""} down-vote-button`}>{this.state.downVotes}   <i class="far fa-thumbs-down"></i></button>

          <h5 class="overall-experience-label"><b>Overall Experience</b></h5>
          <h5 class="text-review">{this.state.textReview}</h5>

          <div class="circle class-difficulty-score-circle">{this.state.classDifficulty}</div>
          <h4 class="class-difficulty-label">Class Difficulty</h4>
          <div class="circle usefulness-score-circle">{this.state.usefulness}</div>
          <h4 class="usefulness-label">Usefulness</h4>
          <div class="circle interesting-score-circle">{this.state.interesting}</div>
          <h4 class="interesting-label">Interesting</h4>

        </div>
      </div>
    );
  }
}

export default Review;
