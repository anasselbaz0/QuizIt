import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Profile from '../../components/Profile/Profile';
import Quizzes from '../../components/Quizzes/Quizzes';
import CreateQuiz from '../../components/Quizzes/CreateQuiz';
import Policy from '../../components/Policy/Policy';

function HomePage() {
  const profile = useSelector(state => state.auth.profile);
  return (
    <div className="md:flex">
      <Profile profile={profile} />
      <Route path="/" component={Policy} />
      <Route path="/quizzes" component={Quizzes} />
      <Route path="/create" component={CreateQuiz} />
    </div>
  );
}

export default HomePage;
