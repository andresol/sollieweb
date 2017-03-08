import fetch from 'isomorphic-fetch'
// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_WIND = 'UPDATE_WIND'
export const UPDATE_TEMP = 'UPDATE_TEMP'

// ------------------------------------
// Actions
// ------------------------------------
// http://www.sollie.info/telldus-api/sensor/5885668
export const updateWind = () => {
  return (dispatch, getState) => {
    return fetch('http://www.sollie.info/telldus-api/sensor/5885668')
      .then(response => response.json())
      .then(json => dispatch(getWeather(json)))
  }
}

export const updatetTempOutDoor = () => {
  return (dispatch, getState) => {
    return fetch('http://www.sollie.info/telldus-api/sensor/4750078')
      .then(response => response.json())
      .then(json => dispatch(getTemp(json)))
  }
}

export const getWeather = (data = {}) => {
  return {
    type: 'UPDATE_WIND',
    data: data
  }
}

export const getTemp = (data = {}) => {
  return {
    type: 'UPDATE_TEMP',
    data: data
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_WIND':
      return action.data
    case 'UPDATE_TEMP':
      return action.data
    default:
      return state
  }
}

export default weatherReducer
