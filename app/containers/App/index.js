import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from '../../global-styles';
import '../../styles/main.css';
import Auth from '../../components/Authentication/Auth';
import Navigation from '../../components/Navigation/Navigation';
import HomePage from '../HomePage/HomePage';
import { useSelector } from 'react-redux';
import Profile from '../../components/Profile/Profile';
import Quizzes from '../../components/Quizzes/Quizzes';
import CreateQuiz from '../../components/Quizzes/CreateQuiz';

export const App = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const profile = useSelector(state => state.auth.profile);
  return (
    <div className="font-sans min-h-screen bg-gray-200">
      <Helmet titleTemplate="%s - Quiz It" defaultTitle="Quiz It">
        <meta name="description" content="Quiz It"/>
      </Helmet>
      {loggedIn ? <Navigation/> : null}
      <div className="md:flex">
        <Switch>
          <React.Fragment>
            <Route
              exact
              path="/"
              component={loggedIn && profile ? HomePage : Auth}
            />
            {/* <Switch> */}
            <Route
              path="/quizzes"
              component={loggedIn && profile ? Quizzes : Auth}
            />
            <Route
              path="/profile"
              component={loggedIn && profile ? Profile : Auth}
            />
            <Route
              path="/create"
              component={loggedIn && profile ? CreateQuiz : Auth}
            />
          </React.Fragment>
        </Switch>
      </div>
      <GlobalStyle/>
    </div>
  );
}

export default App;
