import React, { Component } from 'react';
import * as THREE from 'three';

const Cube = (specs) => {
  let position = specs.startingCoord;
  let colors = specs.colors
  let geometry = new THREE.BoxGeometry( .9, .9,.9 );
  let material = new THREE.MeshPhongMaterial({color: 0xc0c0c0 ,vertexColors: THREE.FaceColors})
  let cube = new THREE.Mesh( geometry, material );
  cube.position.x = position.x
  cube.position.y = position.y
  cube.position.z = position.z
  _.forEach(colors, (value,key) => {cube.geometry.faces[key].color.setHex(value)})
  return cube;

}


export default Cube
