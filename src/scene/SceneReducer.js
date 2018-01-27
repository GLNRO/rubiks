import { CHANGE_CUBE } from './SceneActionTypes';

const initialState = {
  cube: {
    0:'', 1:'', 2:'', 3:'',4:'', 5:'', 6:'', 7:'', 8:'', 9:'', 10:'', 11:'', 12:'', 13:'', 14:'', 15:'', 16:'', 17:'', 18:'', 19:'', 20:'', 21:'', 22:'', 23:'', 24:'', 25:'', 26:''
  }
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
