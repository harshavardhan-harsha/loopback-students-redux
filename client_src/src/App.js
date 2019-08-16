import React, {Fragment} from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import About from './components/pages/About';
import Students from './components/students/Students';
import AddStudent from './components/students/AddStudent';
import EditStudent from './components/students/EditStudent';
import Navbar from './components/layout/Navbar';

//Redux set up
import {Provider} from 'react-redux';
import store from './store';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Students} />
              <Route exact path="/about" component={About} />
              <Route exact path="/students/add" component={AddStudent} />
              <Route exact path="/students/edit/:id" component={EditStudent} />
            </Switch>
          </div>
          <div className="fixed-action-btn">
            <Link to="/students/add" className="btn-floating btn-large red">
              <i className="fas fa-plus"> </i>
            </Link>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
