import React from 'react';
import './Review_List.css';

import Review from '../Review/Review';

class Review_List extends React.Component {
  render() {
    return (
      <div class="Review_List">
        {
          this.props.reviews.map(review => {
            return <Review review={review} key={review.id} />
          })
        }
      </div>
    );
  }
}

export default Review_List;
