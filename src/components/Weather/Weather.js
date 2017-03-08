import React from 'react'
import { Link } from 'react-router'

export class Weather extends React.Component {
  render () {
    return (
      <div>
        <h2></h2>
        <div className='live wind'></div>
        <p>
          <Link />
        </p>
      </div>
    )
  }
}

Weather.defaultProps = {
  title: ''
}

Weather.propTypes = {
  getWeather: React.PropTypes.func,
  title: React.PropTypes.string,
  value: React.PropTypes.string
}

export class Wind extends React.Component {

  constructor (props) {
    super(props)
    this.title = props.weather.name
    this.value = props.weather.data ? props.weather.data[0].value : ''
    const { updateWind } = props.updateWind()
    if (updateWind) {
      updateWind()
    }
  }

  render () {
    return (
      <div>
        <h2>{this.title}</h2>
        <div className='live wind'>{this.value}</div>
        <p>
          <Link />
        </p>
      </div>
    )
  }
}
// data[0].value

Wind.defaultProps = {
  weather: {},
  value: '',
  updateWind: () => ''
}

export class Temp extends Weather {
  constructor (props) {
    super(props)
    this.title = props.weather.name
    this.value = props.weather.data ? props.weather.data[0].value : ''
    const { updateWind } = props.updateTemp()
    if (updateWind) {
      updateWind()
    }
  }

  render () {
    return (
      <div>
        <h2>{this.title}</h2>
        <div className='live wind'>{this.value}</div>
        <p>
          <Link />
        </p>
      </div>
    )
  }
}

Temp.defaultProps = {
  weather: {},
  value: '',
  updateTemp: () => ''
}

