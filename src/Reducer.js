import { combineReducers } from 'redux';
import sceneReducer from './scene/SceneReducer';

const RootReducer = combineReducers({
  sceneReducer
});

export default RootReducer;
