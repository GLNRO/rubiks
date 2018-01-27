import React, { Component } from 'react';
import * as THREE from 'three';
import Cube from './Cube';

const FrontFace = () => {
  let face = {
    0: Cube({x:-1,y:1,z:2}),
    1: Cube({x:0,y:1,z:2}),
    2: Cube({x:1,y:1,z:2}),
    3: Cube({x:-1,y:0,z:2}),
    4: Cube({x:0,y:0,z:2}),
    5: Cube({x:1,y:0,z:2}),
    6: Cube({x:-1,y:-1,z:2}),
    7: Cube({x:0,y:-1,z:2}),
    8: Cube({x:1,y:-1,z:2}),
  }
  return face;

}


export default FrontFace
