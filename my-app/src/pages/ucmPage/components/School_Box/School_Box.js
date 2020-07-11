import React from 'react';

import './School_Box.css';

class School_Box extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'University of California Merced',
      department: 'Computer Science and Engineering',
      logo_src: 'https://caltrout-46mile-v1594212294.websitepro-cdn.com/wp-content/uploads/2019/08/UC-merced-logo.script.svg.png'
    };
  }

  render() {
    return (
      <div>

        {/* School Summary Section */}
        <section id="school-summary">

          <div class="card shadow-sm bg-white rounded school-summary-card">
            <div class="row no-gutters">

              <div class="col">
                <img src={this.state.logo_src} class="card-img college-logo" alt={this.state.name}></img>
              </div>

              <div class="col-lg-10 school-info">
                <div class="card-body">
                  <h5 class="card-title school-name">{this.state.name}</h5>
                  <p class="card-text department-name">{this.state.department}</p>
                  <a href="#" class="card-link change-link"><small>Change</small></a>
                </div>
              </div>
            </div>
          </div>

        </section>
        
      </div>
    );
  }
}

export default School_Box;
