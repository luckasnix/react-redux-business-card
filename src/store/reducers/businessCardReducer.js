import { createReducer } from 'redux-create-reducer'
import * as ActionsTypes from '../actions/businessCardActionsTypes'

const initialState = null
const businessCardReducer = createReducer(
  initialState,
  {
    [ActionsTypes.CREATE_BUSINESS_CARD]: (_, action) => {
      return {
        name: action.name,
        job: action.job,
        email: action.email
      }
    },
    [ActionsTypes.DELETE_BUSINESS_CARD]: () => {
      return null
    }
  }
)

export default businessCardReducer