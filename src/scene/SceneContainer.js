import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {changeCube} from './SceneActions';
import Scene from './Scene.jsx';

const mapStateToProps = (state) => ({
  cube: state.sceneReducer.cube
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeCube: changeCube }, dispatch);

const SceneContainer = connect(mapStateToProps, mapDispatchToProps)(Scene);

export default SceneContainer;
