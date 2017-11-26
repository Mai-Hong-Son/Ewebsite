import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import GradeThree from './GradeThree/index';
import Topic from './Topic/index';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={GradeThree} />
          <Route path={'/topic'} component={Topic} />
        </div>
      </Router>
    );
  }
}

export default App;
