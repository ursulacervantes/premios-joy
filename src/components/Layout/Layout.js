
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.

import fontAwesome from 'font-awesome/css/font-awesome.min.css';

import s from './Layout.scss';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        <div className={s.content}>{this.props.children}</div>
      </div>
    );
  }
}

export default withStyles(fontAwesome, s)(Layout);
