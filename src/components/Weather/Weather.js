import React from 'react'
import { IndexLink, Link } from 'react-router'
/*
 export const Weather = ({ title }) => (
 <div>
 <h2>{title}</h2>
 <div className='live wind'>0.0 ms</div>
 <p>
 <a className='button'>Vind</a>
 </p>
 </div>
 )
 */
export class Weather extends React.Component {

  constructor(props) {
    super(props)
    const {updateWind} = props.updateWind()
    if (updateWind) {
      updateWind();
    }
  }


  render () {
    return (
      <div>
        <h2>{this.props.weather.home.name}</h2>
        <div className='live wind'></div>
        <p>
          <a className='button'>Vind</a>
        </p>
      </div>
    )
  }
}

Weather.defaultProps = {
  updateWind: {}
}
Weather.propTypes = {
  updateWind: React.PropTypes.func
}
