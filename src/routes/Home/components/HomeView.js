import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './HomeView.scss'
import { Wind, Temp } from '../../../components/Weather/Weather'

export const HomeView = (props) => (
  <div id='featured'>
    <div className='container'>
      <Row>
        <Col xs={4} md={4}>
          <Wind updateWind={props.updateWind} weather={props.weather} />
        </Col>
        <Col xs={4} md={4} >
          <Temp updateTemp={props.updateTemp} weather={props.weather} />
        </Col>
        <Col xs={4} md={4} >
          <Wind updateWind={props.updateWind} weather={props.weather} />
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={4} >
          <Wind updateWind={props.updateWind} weather={props.weather} />
        </Col>
        <Col xs={4} md={4} >
          <Wind updateWind={props.updateWind} weather={props.weather} />
        </Col>
        <Col xs={4} md={4} >
          <Wind updateWind={props.updateWind} weather={props.weather} />
        </Col>
      </Row>
    </div>
  </div>
)

HomeView.propTypes = {
  updateWind: React.PropTypes.func,
  updateTemp: React.PropTypes.func,
  weather: React.PropTypes.object
}

export default HomeView
