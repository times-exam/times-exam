import React from 'react';
import PropTypes from 'prop-types';


  function AQuestion(props) {
    return (
      <h2 >{props.content}</h2>
    );
  }
  AQuestion.propTypes = {
    content: PropTypes.string.isRequired
  };
  export default AQuestion;