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
    return fetch('http://www.sollie.info/telldus-api/sensor/10535866')
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
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [UPDATE_WIND]: (state, action) => ({ ...state, wind: action.data }),
  [UPDATE_TEMP]: (state, action) => ({ ...state, temp: action.data })
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {}
export default function weatherReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
