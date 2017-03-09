import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './HomeView.scss'
import { Wind, Temp } from '../../../components/Weather/Weather'

export const HomeView = (props) => (
  <div id='featured'>
    <div className='container'>
      <Row>
        <Col xs={4} md={4}>
          <Wind updateWind={props.updateWind} weather={props.home.wind} />
        </Col>
        <Col xs={4} md={4} >
          <Temp updateTemp={props.updateTemp} weather={props.home.temp} />
        </Col>
        <Col xs={4} md={4} >
          <Wind updateWind={props.updateWind} weather={props.home.wind} />
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={4} >
          <Wind updateWind={props.updateWind} weather={props.home.wind} />
        </Col>
        <Col xs={4} md={4} >
          <Wind updateWind={props.updateWind} weather={props.home.wind} />
        </Col>
        <Col xs={4} md={4} >
          <Wind updateWind={props.updateWind} weather={props.home.wind} />
        </Col>
      </Row>
    </div>
  </div>
)

HomeView.propTypes = {
  updateWind: React.PropTypes.func,
  updateTemp: React.PropTypes.func,
  weather: React.PropTypes.object,
  temp: React.PropTypes.object
}

export default HomeView
