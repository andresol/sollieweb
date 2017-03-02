import React from 'react'
import { IndexLink, Link } from 'react-router'

export const Weather = ({ title }) => (
  <div>
    <h2>{title}</h2>
    <div className='live wind'>0.0 ms</div>
    <p>
      <a className='button'>Vind</a>
    </p>
  </div>
)

Weather.defaultProps = {
  title: 'test'
}
Weather.propTypes = {
  title: React.PropTypes.string
}
