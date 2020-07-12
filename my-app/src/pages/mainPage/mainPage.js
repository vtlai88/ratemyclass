import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead';
import ReactDOM from 'react-dom';
import options from './data';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './mainPage.css';
import logo from '../../Logos/Artboard 17 copylogos.png';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      college: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    selected: [],
  };

  handleChange(event) {
    console.log(event)
    if (event.length > 0){
      this.setState({college: event[0].label.split('-')[0].trim()});
    }
  }

  handleSubmit(event) {
    alert('College submitted: ' + this.state.college);
    event.preventDefault();
    this.props.history.push('/classPage');
  }

  render() {
    return (
      <div class="wrap">
      <img src={logo} alt="Logo" class="logo-image"/>
      <h1 class="slogan">Discover the best classes at your college!</h1>

        <div class="search-bar">
          <form>
            <label>
              <Typeahead
                  type="text"
                  value={this.state.college}
                  onChange={this.handleChange}
                  class="form-control"
                  options={options}
                  placeholder="Enter a college or university..."
                />
            </label>
            <button type="button" onClick={this.handleSubmit} class="btn btn-primary mb-2">Search</button>
          </form>
        </div>
      </div>
    );
  }
}
       
ReactDOM.render(<Home />, document.getElementById('root'));
export default withRouter(Home);
