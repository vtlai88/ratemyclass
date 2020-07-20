import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead';
import ReactDOM from 'react-dom';
import options from './data';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './mainPage.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    // this.handleChange = this.handleChange.bind(this);
    }

  state = {
    selected: [],
  };

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // submitForm (e) {
  //   alert(this.state.college)
  //   e.preventDefault()
  //   this.props.history.push('/majorDepartment');
  // }

  submitForm (e) {
    e.preventDefault()
    this.props.history.push('/classPage'); // <--- The page you want to redirect your user to.
  }

  render() {
    return (
      <div class="search-bar">
        <form onSubmit={this.submitForm.bind(this)}>
          <div class="form-row">
            <div class="col-4">
              <Typeahead
                {...this.state}
                class="form-control"
                type="text"
                // onChange={this.handleChange}
                value={this.state.value}
                options={options}
                placeholder="Enter a University or College..."
              />
            </div>

            <div class="col-1">
              <button type="submit" class="btn btn-primary mb-2">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
export default withRouter(Home);