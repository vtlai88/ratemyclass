import React from "react";
import './notFound.css';


class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <h2>This page is not found.</h2>
          <h2>Click on this button to go back to the home page!</h2>
        </div>
    </div>
    );
  };
};


export default NotFoundPage;