import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';

import s from './Question.scss';
import { setVote } from '../../actions/poll';

class Question extends React.Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
    nominees: PropTypes.shape({
      name: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    }).isRequired,
  };

  setVote() {
    this.props.setVote({
      question: 'change',
      nominees: {
        0: {
          name: 'Manuel',
          votes: 100,
        }
      }
    });
  }

  render() {
    const { question = '', nominees = [] } = this.props.question
      ? this.props.question
      : {};
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{question}</h1>
          {!!nominees &&
            nominees.map(nominee => (
              <div
                className={(s.button, s.secondary)}
                role="button"
                onClick={this.setVote.bind(this)}
              >
                {nominee.name}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapDispatch = {
  setVote,
};

export default connect(null, mapDispatch)(withStyles(s)(Question));
