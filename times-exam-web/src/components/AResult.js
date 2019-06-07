import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

  function AResult(props) {
    return (
        <ReactCSSTransitionGroup
        className="container result"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
      <div className="result">
        You prefer <strong>{props.quizResult}</strong>!
      </div>

      </ReactCSSTransitionGroup>

    );
  }
  AResult.propTypes = {
    quizResult: PropTypes.string.isRequired,
  };
  export default AResult;