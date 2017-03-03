import { connect } from 'react-redux'
import { updateWind } from '../modules/home'

const mapDispatchToProps = {
  updateWind : () => updateWind
}

const mapStateToProps = (state) => ({
  weather : state.data
})

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
