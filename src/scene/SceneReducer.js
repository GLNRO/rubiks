import { RIGHT_TURN,RIGHT_CLOCK } from './SceneActionTypes';
import {rightTurn} from '../services/CubeTransitions';

const initialState = {
  cubeState: {
    A:0, B:1, C:2, D:3, E:4, F:5, G:6, H:7, I:8, J:9, K:10, L:11, M:12, N:13, O:14, P:15, Q:16, R:17, S:18, T:19, U:20, V:21, W:22, X:23, Y:24, Z:25, ZZ:26
  },
  rubiksCube: {}
}

const sceneReducer = (state = initialState, action) => {
  switch(action.type){
    case RIGHT_TURN:
      let newState = rightTurn(state.cubeState);
      console.log("Reducer turn Right")
      let rubiks = action.rubiks
      return {...state, cubeState: newState, rubiksCube: rubiks }
    default:
      return state
  }
}

export default sceneReducer;
