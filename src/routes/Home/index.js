import { injectReducer } from '../../store/reducers'

export default (store) => ({
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const HomeView = require('./containers/HomeContainer').default
      const reducer = require('./modules/home').default

      /*  Add the reducer to the store on key 'home'  */
      injectReducer(store, { key: 'home', reducer })

      /*  Return getComponent   */
      cb(null, HomeView)

      /* Webpack named bundle   */
    }, 'HomeView')
  }
})
