import { createStore } from 'redux'
import mainReducer from './reducer'

const store = createStore(mainReducer, window.STATE_FROM_SERVER, window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;