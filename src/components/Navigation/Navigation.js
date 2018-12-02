import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import s from './Navigation.scss';
import Link from '../Link';

class Navigation extends React.Component {
  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        icon: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s['nav-right']} role="navigation">
        <ul className={s.menu}>
          {this.props.links.map(link => (
            <li key={link.label}>
              <Link to={link.to}>
                {link.label}{' '}
                {link.icon ? <i className={cx('fa', link.icon)} /> : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
