import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import test from './test/test.tsx'

const App = () => (
  <Router>
    <Route path='/' component={test}>
    </Route>
  </Router>
);

export default App;
