import React from 'react';

import './ScoreCircle.css';

/*
  Sizes:
  xlg: 13.4375rem (215px)
  lg: 9.5rem (152px)
  md: 6.3125rem (101px)
  sm: 5.6875rem (91px)
  xsm: 3.4375rem (55px)
*/

class ScoreCircle extends React.Component {
  getSize() {
    const given_size = this.props.size;
    let rem_size = 0;

    if(given_size === "xlg") rem_size = 13.4375;
    else if(given_size === "lg") rem_size = 9.5;
    else if(given_size === "md") rem_size = 6.3125;
    else if(given_size === "sm") rem_size = 5.6875;
    else if(given_size === "xsm") rem_size = 3.4375;

    return rem_size;
  }

  getColor() {
    let set_color = '#B4F46E';

    if(this.props.score < 2.5) set_color = '#FFA16D';
    else if(this.props.score < 3.5) set_color = '#D7F260';
    else set_color = '#B4F46E';

    return set_color;
  }

  render() {
    const style = {
        height: this.getSize() + 'rem',
        width: this.getSize() + 'rem',
        background: this.getColor(),
    }
    return (
      <div class="circle" style={style}><span class="circle-text">{this.props.score}</span></div>
    );
  }
}

export default ScoreCircle;
