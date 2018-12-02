import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Question.scss';

class Question extends React.Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
    nominees: PropTypes.shape({
      name: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    }).isRequired,
  };

  render() {
    const { question, nominees } = this.props.question;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{question}</h1>
          {!!nominees && nominees.map(nominee => <div>{nominee.name}</div>)}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Question);
