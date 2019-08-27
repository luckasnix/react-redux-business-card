import * as ActionsTypes from './businessCardActionsTypes'

export function createBusinessCard(name, job) {
  return {
    type: ActionsTypes.CREATE_BUSINESS_CARD,
    name: name,
    job: job
  }
}
export function deleteBusinessCard() {
  return {
    type: ActionsTypes.DELETE_BUSINESS_CARD
  }
}