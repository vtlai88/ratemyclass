import React from "react";
import AppBar from './AppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

// from Home branch
import Home from './pages/mainPage';
import NotFoundPage from './pages/404';
import MajorDepartment from './pages/majorDepartmentSearch';
import Login from './pages/login';
import SignIn from './pages/signIn';
import Review from './pages/review';

export default function App() {
  return (
    <Router>
      <div>
        <AppBar/>
    
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signIn" component={SignIn}/>
          <Route exact path="/majorDepartment" component={MajorDepartment}/>
          <Route exact path="/review" component={Review}/>
          <Route path="/404" component={NotFoundPage}/>
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
};

