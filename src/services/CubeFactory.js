import React, { Component } from 'react';
import * as THREE from 'three';
import Cube from '../geometry/Cube';
import cubeSpecs from '../config/cubeSpecs.json';


const CubeFactory = () => {
  let cubes = [];
    _.forEach(cubeSpecs, (value,key) => {
      let cube = Cube(value)
      cubes.push(cube)
    })
    return cubes
}

export default CubeFactory;
