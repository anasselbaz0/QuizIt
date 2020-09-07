import React from 'react';
import { connect } from 'react-redux';
import Title from '../Titles/Title';
import { getMyQuizzes } from './state/actions';
import SubTitle from '../Titles/SubTitle';
import QuestionList from './Questions/QuestionList';

class Quizzes extends React.Component {

  componentDidMount() {
    this.props.getMyQuizzes();
  }

  render() {
    return (
      <div className="flex-1 bg-white m-2 p-2 md:p-4 lg:p-8 border border-gray-300 text-gray-700 rounded">
        <Title> My quizzes </Title>
        {this.props.quizzes.length === 0 ? (
          this.noQuizzes
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 border border-gray-300 text-gray-700 rounded-lg">
            {this.listOfQuizzes}
          </div>
        )}
      </div>
    );
  }

  noQuizzes = (
    <div className="w-full text-center text-gray-500 font-bold text-xl p-4">
      No Quizzes found
    </div>
  );

  listOfQuizzes = this.props.quizzes.map(quiz => (
    <div
      key={quiz.id}
      className="bg-white hover:bg-gray-200 cursor-pointer p-8 border border-b"
    >
      <SubTitle> {quiz.title} </SubTitle>
      <div className="mt-3 block">
        <QuestionList questions={quiz.questions || []} />
      </div>
    </div>
  ));
}

const mapStateToProps = state => ({
  quizzes: state.quiz.quizzes,
});

const mapDispatchToProps = dispatch => ({
  getMyQuizzes: () => dispatch(getMyQuizzes()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quizzes);
