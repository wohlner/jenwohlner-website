import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
        <li>
          <Link to='/'>All Projects</Link>
        </li>
        <li>
          <Link to='/drawing'>Drawing</Link>
        </li>
        <li>
          <Link to='/sculpture'>Sculpture</Link>
        </li>
        <li>
          <Link to='/internet'>Internet</Link>
        </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
