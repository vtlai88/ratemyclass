import React from "react";
import './reviewPage.css';

import Overall from './components/Overall_Page/overallPage'



class ReviewPage extends React.Component  {

  render() {
    return(
      <div>
        <div class="container">
          <Overall />
        </div>
      </div>
    )

  }
}

export default ReviewPage;
