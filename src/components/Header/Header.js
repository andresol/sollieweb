import React from 'react'
import { Link } from 'react-router'
import Banner from '../Assets/banner.jpg'
import './Header.scss'

export const Nav = () => (
  <nav id='nav'>
    <ul>
      <li className='active'><a href='/'>Hjem</a></li>
      <li><a href='http://www.sollie.info/strava'>Strava</a></li>
      <li><a href='https://github.com/andresol' target='_blank'>GitHub</a></li>
      <li><Link to={`/power`}>Strømforbruk</Link></li>
    </ul>
  </nav>
)

export const Header = () => (
  <div style={{ backgroundImage: `url(${Banner})` }} id='header'>
    <div className='container'>
      <div id='logo'>
        <h1>
          <a href='#'>SOLLIE</a></h1>
      </div>
      <Nav />
    </div>
  </div>
)

export default Header
