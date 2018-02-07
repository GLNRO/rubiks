import React, { Component } from 'react';
import * as THREE from 'three';
import _ from 'lodash';
let OrbitControls = require('three-orbit-controls')(THREE);
import CubeFactory from '../services/CubeFactory';
import RubiksCube from '../geometry/RubiksCube';
import * as LightFactory from '../services/LightFactory';
export default class Scene extends Component{

  componentDidMount(){
      this.start = this.start.bind(this)
      this.stop = this.stop.bind(this)
      this.animate = this.animate.bind(this)
      const width = screen.width;
      const height = screen.height*.75;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75, width/height,1,1000
      )
      camera.position.z = 7;
      let lights = LightFactory.setupSceneLights();
      _.forEach(lights, (light) => {scene.add(light)})
      let controls = new OrbitControls(camera)
      const renderer = new THREE.WebGLRenderer({antialias: true})
      renderer.setClearColor('#90A4AE')
      renderer.setSize(width, height)

      this.rotationDegree = 0
      let xAxis = new THREE.Vector3(1,0,0)
      let cubes = CubeFactory()
      let rubiks = new RubiksCube(cubes)
      _.forEach(cubes, (cube) => {scene.add(cube)})
      this.isRotating = false
      this.xAxis = xAxis
      // scene.add(this.xAxis)
      this.scene = scene
      this.camera = camera
      this.renderer = renderer
      this.controls = controls
      this.rubiks = rubiks
      this.controls.update();
      this.mount.appendChild(this.renderer.domElement)
      this.start()
  }

  componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    let degree = (Math.PI/2)/90
    let rightFaceIdx = ['A', 'D', 'G', 'J', 'M', 'P', 'S', 'N', 'Y']
    // console.log(this.props.cubeState)
    let rightFace = []

    _.forEach( rightFaceIdx, (key) => {
      rightFace.push(this.rubiks.state.cubes[this.props.cubeState[key]])
    })
    while(this.isRotating == true){
      for(var i = 0; i<90; i++){
        _.forEach( rightFace, (mesh) => {
          mesh.rotation.x += degree
        })

      }
      this.isRotating = false
    }


    this.renderScene()
    this.frameId =  window.requestAnimationFrame(this.animate)
    this.controls.update();

  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  addElement(element){
    this.scene.add(element)
  }



  rotateRight(rightTurn, cubeState){
    // let rightFace = new THREE.Group();
    // _.forEach( rightFaceIdx, (key) => {
    //   rightFace.add(this.rubiks.state.cubes[cubeState[key]])
    // })
    this.isRotating = true
    // rightFace.rotateOnAxiss(this.xAxis, Math.PI/2)
    // console.log(rightFace)
    rightTurn(this.rubiks)
    console.log(this.rubiks)
    console.log(cubeState)

  }

  render() {
    const {cubeState, rightTurn } = this.props;

    return (
      <div>
        <div id="controls">
          <button onClick={ event => this.rotateRight(rightTurn, cubeState)}>Right Turn</button>
        </div>
        <div
          id="WebGL-output"
          ref={(mount) => { this.mount = mount }}
        />
      </div>

    )
  }
}
