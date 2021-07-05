import { actionTypes } from './popupTypes'
const { TOGGLE_DELETE_MODE } = actionTypes

export const toggleDeleteMode = () => {
  return {
    type: TOGGLE_DELETE_MODE,
  }
}
