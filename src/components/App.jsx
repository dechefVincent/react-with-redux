import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import PageNotFound from './PageNotFound';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import CoursesPage from './courses/CoursesPage';
import HomePage from './home/HomePage';
import ManageCoursePage from './courses/ManageCoursePage';

const App = () => (
  <div className="container-fluid">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/course/:slug" component={ManageCoursePage} />
      <Route path="/course" component={ManageCoursePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={PageNotFound} />
    </Switch>
    <ToastContainer autoClose={3000} hideProgressBar />
  </div>
);

export default App;
