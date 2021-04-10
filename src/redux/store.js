// BASIC REDUX STORE
    // import createStore and combineReducers
    // import all of the reducers
    // combine all of the reducers
    // initialize store with combined reducers
    // export default store

import { createStore, combineReducers } from 'redux';
import ParticleReducer from './ParticleReducer'
import PolygonReducer from './PolygonReducer'

const allReducers = combineReducers({
    ParticleReducer,
    PolygonReducer,
})

let store = createStore(allReducers)

export default store;