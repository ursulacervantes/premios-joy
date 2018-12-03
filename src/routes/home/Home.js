import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';

import history from '../../history';

import s from './Home.scss';

class Home extends React.Component {
  // static propTypes = {
  //   questions: PropTypes.shape({
  //     lastUpdated: PropTypes.string,
  //     serviceName: PropTypes.string,
  //     serviceStatus: PropTypes.string,
  //   }),
  // };

  static defaultProps = {
    services: [],
  };

  onVoteClick() {
    history.push({
      pathname: 'vote',
    });
  }

  render() {
    return (
      <div>
        <div className={s['content-block-section']}>
          <div className={s['content-row']}>
            <p>Que inicien las elecciones</p>
            <div
              className={s.button}
              onClick={this.onVoteClick}
              role="button"
              tabIndex="0"
            >
              Votar
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  questions: Object.assign({}, state.questions),
});

export default connect(mapState)(withStyles(s)(Home));
