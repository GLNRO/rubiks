import React, { Component } from 'react';
import * as THREE from 'three';

const Cube = (position) => {
  let geometry = new THREE.BoxGeometry( .9, .9,.9 );
  let material = new THREE.MeshPhongMaterial({color: 0x7E57C2,vertexColors: THREE.FaceColors})
  let cube = new THREE.Mesh( geometry, material );
  cube.position.x = position.x
  cube.position.y = position.y
  cube.position.z = position.z
  return cube;

}


export default Cube
