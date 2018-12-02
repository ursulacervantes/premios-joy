import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import Link from '../Link';
import s from './Footer.scss';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      links: [
        {
          title: 'Nuna',
          sublinks: [
            {
              label: 'Acerca',
              to: '/about',
            },
            {
              label: 'Tejedoras',
              to: '/women',
            },
          ],
        },
        {
          title: 'Compra Online',
          sublinks: [
            {
              label: 'Términos y Condiciones',
              to: '/terms',
            },
            {
              label: 'Retorno y Reembolso',
              to: '/return',
            },
            {
              label: 'Política de privacidad',
              to: '/privacy',
            },
          ],
        },
        {
          title: 'Ayuda',
          sublinks: [
            {
              label: 'Contáctanos',
              to: '/contact',
            },
          ],
        },
      ],
    };
  }

  render() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <div className={cx(s['footer-row'], s.socials)}>
          <div>
            <a
              href="https://www.facebook.com/nuna/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook" />
            </a>
            <a
              href="https://www.instagram.com/nuna_ropa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram" />
            </a>
          </div>
        </div>
        <div className={cx(s['footer-row'], s['footer-links'])}>
          <div>
            <div className={s['links-row']}>
              {this.state.links.map(link => (
                <div className={s['link-column']} key={link.title}>
                  <div className={s['link-title']}>{link.title}</div>
                  <div>
                    {link.sublinks.map(sublink => (
                      <div key={sublink.to} className={s['link-item']}>
                        <Link to={sublink.to}>{sublink.label}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={cx(s['footer-row'], s.bottom)}>
          <div>© Nuna {year} Todos los derechos reservados</div>
        </div>
      </footer>
    );
  }
}

export default withStyles(s)(Footer);
