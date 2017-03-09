import { connect } from 'react-redux'
import { updateWind, updatetTempOutDoor } from '../modules/home'
import { createSelector } from 'reselect'

const mapDispatchToProps = {
  updateWind : updateWind,
  updateTemp: updatetTempOutDoor
}

/*
 const getActionFilter = (state) => state.home
 const getData = (state) => state.home

 export const getWeatherData = createSelector(
 [ getActionFilter, getData ],
 (getActionFilter, getData) => {
 switch (getActionFilter) {
 case 'UPDATE_WIND':
 return getData(state);
 case 'UPDATE_TEMP':
 return getData(state);
 }
 }
 )
 */
const mapStateToProps = (state) => {
  return {
    ...state
  }
}

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

 import { createSelector } from 'reselect'
 const counter = (state) => state.counter
 const tripleCount = createSelector(counter, (count) => count * 3)
 const mapStateToProps = (state) => ({
 counter: tripleCount(state)
 })

 Selectors can compute derived data, allowing Redux to store the minimal possible state.
 Selectors are efficient. A selector is not recomputed unless one of its arguments change.
 Selectors are composable. They can be used as input to other selectors.
 https://github.com/reactjs/reselect    */

import HomeView from '../components/HomeView'

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
