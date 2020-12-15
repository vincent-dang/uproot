import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Test from './components/Test'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/"> <Test/> </Route>
      </Switch>
    </Router>
  );
}