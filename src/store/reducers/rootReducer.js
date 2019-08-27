import { combineReducers } from 'redux'
import businessCardReducer from './businessCardReducer'

const rootReducer = combineReducers(
  {
    businessCard: businessCardReducer
  }
)

export default rootReducer