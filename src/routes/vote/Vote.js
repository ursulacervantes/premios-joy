import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';

import Question from '../../components/Question';
import s from './Vote.scss';

class Vote extends React.Component {
  static propTypes = {
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        nominees: PropTypes.shape({
          name: PropTypes.string.isRequired,
          votes: PropTypes.number.isRequired,
        }).isRequired,
      }),
    ),
  };

  static defaultProps = {
    questions: [
      {
        question: 'Champion del año',
        nominees: [
          {
            name: 'Manuel',
            votes: 10,
          },
          {
            name: 'Manu',
            votes: 80,
          },
        ],
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: 0,
    };
  }

  render() {
    return (
      <div>
        <div className={s['content-block-section']}>
          <div className={s['content-row']}>
            <Question
              question={this.props.questions[this.state.activeQuestion]}
            />
          </div>
        </div>
      </div>
    );
  }
}

// const mapState = state => ({
//   questions: Object.assign({}, state.service.list),
// });

// export default connect(mapState)(withStyles(s)(Vote));
export default withStyles(s)(Vote);
