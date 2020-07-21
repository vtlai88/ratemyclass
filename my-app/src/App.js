import React from "react";
import AppBar from './AppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


import Home from './pages/mainPage/mainPage';
import NotFoundPage from './pages/404';
import Login from './pages/login';
import SignIn from './pages/signIn';
import classPage from './pages/classPage/classPage';

import Overall from "./pages/reviewPage/components/Overall_Page/overallPage"
import Difficulty from "./pages/reviewPage/components/Difficulty_Page/difficultyPage"
import Workload from "./pages/reviewPage/components/Workload_Page/workloadPage"
import Useful from "./pages/reviewPage/components/Useful_Page/usefulPage"
import ReviewPage from "./pages/reviewPage/components/Review_Page/review"


export default function App() {
  return (
    <Router>
      <div>
        <AppBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signIn" component={SignIn}/>
          <Route exact path="/classPage" component={classPage}/>
         
          <Route exact path="/classPage/overall" component={Overall}/>
          <Route exact path="/classPage/overall/difficulty" component={Difficulty}/>
          <Route exact path="/classPage/overall/difficulty/workload" component={Workload}/>
          <Route exact path="/classPage/overall/difficulty/workload/useful" component={Useful}/>
          <Route exact path="/classPage/overall/difficulty/workload/useful/review" component={ReviewPage}/>
          
          <Route path="/404" component={NotFoundPage}/>
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
};

