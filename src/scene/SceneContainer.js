import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {rightTurn} from './SceneActions';
import Scene from './Scene.jsx';

const mapStateToProps = (state) => ({
  cubeState: state.sceneReducer.cubecubeState,
  rubiksCube: state.sceneReducer.rubiksCube
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  rightTurn: rightTurn }, dispatch);

const SceneContainer = connect(mapStateToProps, mapDispatchToProps)(Scene);

export default SceneContainer;
