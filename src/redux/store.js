// BASIC REDUX STORE
    // import createStore and combineReducers
    // import all of the reducers
    // combine all of the reducers
    // initialize store with combined reducers
    // export default store

import { createStore, combineReducers } from 'redux';
import ParticleReducer from './ParticleReducer'
import PolygonReducer from './PolygonReducer'
import WaveReducer from './WaveReducer'

const allReducers = combineReducers({
    ParticleReducer,
    PolygonReducer,
    WaveReducer
})

let store = createStore(allReducers)

export default store;