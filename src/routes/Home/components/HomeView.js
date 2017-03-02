import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './HomeView.scss'
import Weather from '../../../components/Weather'

export const HomeView = () => (
  <div id='featured'>
    <div className='container'>
      <Row>
        <Col xs={4} md={4}>
          <Weather />
        </Col>
        <Col xs={4} md={4} >
          <Weather />
        </Col>
        <Col xs={4} md={4} >
          <Weather />
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={4} >
          <Weather />
        </Col>
        <Col xs={4} md={4} >
          <Weather />
        </Col>
        <Col xs={4} md={4} >
          <Weather />
        </Col>
      </Row>
    </div>
  </div>
)

export default HomeView
