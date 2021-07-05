export enum actionTypes {
  TOGGLE_DELETE_MODE = 'TOGGLE_DELETE_MODE',
}

interface ToggleDeleteMode {
  type: actionTypes.TOGGLE_DELETE_MODE
}

export type PopupAction = ToggleDeleteMode
