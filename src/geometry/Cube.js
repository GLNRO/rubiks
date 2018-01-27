import React, { Component } from 'react';
import * as THREE from 'three';

const Cube = (position) => {
  let geometry = new THREE.BoxGeometry( .9, .9,.9 );
  let material = new THREE.MeshBasicMaterial( {color: 0x7E57C2} );
  let cube = new THREE.Mesh( geometry, material );
  cube.position.x = position.x
  cube.position.y = position.y
  cube.position.z = position.z
  return cube;

}


export default Cube
