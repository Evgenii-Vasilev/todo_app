import { actionTypes, PopupAction } from './popupTypes'
const { TOGGLE_DELETE_MODE } = actionTypes

const initState = {
  deleteMode: false,
}

const popupReducer = (state = initState, payload: PopupAction) => {
  switch (payload.type) {
    case TOGGLE_DELETE_MODE:
      return { ...state, deleteMode: !state.deleteMode }
    default:
      return state
  }
}

export default popupReducer
