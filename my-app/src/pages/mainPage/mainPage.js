
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './mainPage.css';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


//initialize Firebase
var config = {
    apiKey: "AIzaSyBQb8OlgYaZRg6MYlC2sk8EoJf-FsMdDsE",
    authDomain: "ratemyclass-4a6a1.firebaseapp.com",
    databaseURL: "https://ratemyclass-4a6a1.firebaseio.com",
    projectId: "ratemyclass-4a6a1",
    storageBucket: "ratemyclass-4a6a1.appspot.com",
    messagingSenderId: "1008600140252",
    appId: "1:1008600140252:web:dc325b249cf0adee372719",
    measurementId: "G-6TG02EZN30"
  };
firebase.initializeApp(config);


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
          college: '',
      };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({college: event.target.value});
  }


  submitForm (e) {
    alert(this.state.college)
    e.preventDefault()
    this.props.history.push('/majorDepartment');
  }

  render() {
    return (
      <div class="search-bar">
      <form utocomplete="off" action="/action_page.php">
        <div class="autocomplete" style="width:300px;">
          <div class="form-row">
            <div class="col-4">
              <input class="form-control" type="text" placeholder="Enter a University or College..." value={this.state.college} onChange={this.handleChange} />
              
            </div>
            <div class="col-1">
              <button type="submit" class="btn btn-primary mb-2">Search</button>
            </div>
            </div>
          </div>
        </form>
      </div>

    );
  }
}

export default withRouter(Home);
