
import React from 'react'; 
import PropTypes from 'prop-types';
import AQuestion from './AQuestion'; 
import AQuestionCount from './AQuestionCount'; 
import AAnswerOption from './AAnswerOption';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function AQuiz2(props) {

  function ArenderAnswerOptions(key) {
    return (
      <AAnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

    return (
      <ReactCSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
       <div key={props.questionId}>
         <AQuestionCount
           counter={props.questionId}
           total={props.questionTotal}
         />
         <AQuestion content={props.question} />
         <ul className="answerOptions">
           {props.answerOptions.map(ArenderAnswerOptions)}
         </ul>
       </div>
       </ReactCSSTransitionGroup>
    );

    
  }
  AQuiz2.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };
  export default AQuiz2;