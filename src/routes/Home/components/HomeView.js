import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './HomeView.scss'
import Weather from '../../../components/Weather'

export const HomeView = (props) => (
  <div id='featured'>
    <div className='container'>
      <Row>
        <Col xs={4} md={4}>
          <Weather updateWind={props.updateWind} weather={props.weather} />
        </Col>
        <Col xs={4} md={4} >
          <Weather updateWind={props.updateTemp} weather={props.weather} />
        </Col>
        <Col xs={4} md={4} >
          <Weather updateWind={props.updateWind} weather={props.weather} />
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={4} >
          <Weather updateWind={props.updateWind} weather={props.weather} />
        </Col>
        <Col xs={4} md={4} >
          <Weather updateWind={props.updateWind} weather={props.weather} />
        </Col>
        <Col xs={4} md={4} >
          <Weather updateWind={props.updateWind} weather={props.weather} />
        </Col>
      </Row>
    </div>
  </div>
)

export default HomeView
