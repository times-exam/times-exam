import React from 'react';
import PropTypes from 'prop-types';


  function AQuestionCount(props) {
    return (
      <div className="questionCount">
        Question <span>{props.counter}</span> of <span>{props.total}</span>
      </div>
    );
  }
  AQuestionCount.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  };
  export default AQuestionCount;