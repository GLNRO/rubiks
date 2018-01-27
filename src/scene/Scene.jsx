import React, { Component } from 'react';
import * as THREE from 'three';
import _ from 'lodash';
let OrbitControls = require('three-orbit-controls')(THREE);
import BottomFace from '../geometry/BottomFace';
import CenterFace from '../geometry/CenterFace';
import FrontFace from '../geometry/FrontFace';
export default class Scene extends Component{

  componentDidMount(){
      this.start = this.start.bind(this)
      this.stop = this.stop.bind(this)
      this.animate = this.animate.bind(this)
      const width = screen.width;
      const height = screen.height*.75;
      console.log(screen.height)
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75, width/height,1,1000
      )
      camera.position.z = 7;
      let light = new THREE.AmbientLight( 0x404040 );
      let dirLight = new THREE.DirectionalLight( {color: 0xffffff, intensity: .1} );
      dirLight.position.set( 15, 15, 15 ).normalize();
      let dirLight2 = new THREE.DirectionalLight( {color: 0xffffff, intensity: .1} );
      dirLight2.position.set( -15, -15, -15 ).normalize();
      let dirLight3 = new THREE.DirectionalLight( {color: 0xffffff, intensity: .1} );
      dirLight3.position.set( -15, 15, -15 ).normalize();
      let dirLight4 = new THREE.DirectionalLight( {color: 0xffffff, intensity: .1} );
      dirLight4.position.set( 15, -15, 15 ).normalize();
      scene.add(light);
      scene.add(dirLight);
      scene.add(dirLight2);
      scene.add(dirLight3);
      scene.add(dirLight4);
      let controls = new OrbitControls(camera)
      const renderer = new THREE.WebGLRenderer({antialias: true})
      renderer.setClearColor('#90A4AE')
      renderer.setSize(width, height)

      let bottom = BottomFace();
      let center = CenterFace();
      let front = FrontFace();
      console.log(bottom)
      _.forEach(bottom, (value,key) => {scene.add(value)})
      _.forEach(center, (value,key) => {scene.add(value)})
      _.forEach(front, (value,key) => {scene.add(value)})

      this.scene = scene
      this.camera = camera
      this.renderer = renderer
      this.controls = controls
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

  render() {

    const {cube, changeCube } = this.props;
    return (
      <div>
        <div
          id="WebGL-output"
          ref={(mount) => { this.mount = mount }}
        />
      </div>

    )
  }
}
