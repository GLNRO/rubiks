import React, { Component } from 'react';
import * as THREE from 'three';
import Cube from './Cube';

const CenterFace = () => {
  let face = {
    0: Cube({x:-1,y:1,z:1}),
    1: Cube({x:0,y:1,z:1}),
    2: Cube({x:1,y:1,z:1}),
    3: Cube({x:-1,y:0,z:1}),
    4: Cube({x:0,y:0,z:1}),
    5: Cube({x:1,y:0,z:1}),
    6: Cube({x:-1,y:-1,z:1}),
    7: Cube({x:0,y:-1,z:1}),
    8: Cube({x:1,y:-1,z:1}),
  }
  return face;

}


export default CenterFace
