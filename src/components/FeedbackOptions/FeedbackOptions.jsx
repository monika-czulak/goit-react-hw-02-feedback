import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {Object.keys(options).map(option => (
          <button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {capitalizeFirstLetter(option)}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
