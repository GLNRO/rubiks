import { CHANGE_CUBE } from './SceneActionTypes';

const initialState = {
  cube: {}
}

const sceneReducer = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_CUBE:
      return {...state, cube: action.data }
    default:
      return state
  }
}

export default sceneReducer;
