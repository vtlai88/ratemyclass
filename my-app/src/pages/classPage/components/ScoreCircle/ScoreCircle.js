import React from 'react';

import './ScoreCircle.css';

class ScoreCircle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      size: '',
    };
  }
  render() {

    return (
      <span class="dot overall-score-circle"></span>
    );
  }
}
