import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Profile from '../../components/Profile/Profile';
import Quizzes from '../../components/Quizzes/Quizzes';
import CreateQuiz from '../../components/Quizzes/CreateQuiz';

function HomePage() {
  const profile = useSelector(state => state.auth.profile);
  return (
    <div className="md:flex">
      <Profile profile={profile} />
      {/* <Switch> */}
      <Route path="/quizzes" component={Quizzes} />
      <Route path="/create" component={CreateQuiz} />
      {/* </Switch> */}
    </div>
  );
}

export default HomePage;
