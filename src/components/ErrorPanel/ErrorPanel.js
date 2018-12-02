import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ErrorPanel.scss';

class ErrorPanel extends React.Component {

  static propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className={s['panel']}>
        <div className={s['x-button']} onClick={this.props.onClose}>
          x
        </div>
        <div className={s['message']}>
          {this.props.message}
        </div>
      </div>
    )
  }
}

export default withStyles(s)(ErrorPanel);
