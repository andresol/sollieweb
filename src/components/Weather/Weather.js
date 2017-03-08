import React from 'react'
import { Link } from 'react-router'

export class Weather extends React.Component {
  getTitle () {
    return this.title
  }

  getValue () {
    return this.name
  }

  render () {
    return (
      <div>
        <h2>{this.getTitle()}</h2>
        <div className='live wind'>{this.getValue()}</div>
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

export class Wind extends Weather {

  constructor (props) {
    super(props)
    this.title = props.weather.name
    this.value = props.weather.data ? props.weather.data[0].value : ''
    const { updateWind } = props.updateWind()
    if (updateWind) {
      updateWind()
    }
  }
}
// data[0].value

Wind.defaultProps = {
  title: '',
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
}

Temp.defaultProps = {
  title: '',
  value: '',
  updateTemp: () => ''
}

