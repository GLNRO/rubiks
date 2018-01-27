import React, { Component } from 'react';
import * as THREE from 'three';
import _ from 'lodash';
import Cube from './Cube';

const BottomFace = () => {
  let face = {
    0: Cube({x:-1,y:1,z:0}),
    1: Cube({x:0,y:1,z:0}),
    2: Cube({x:1,y:1,z:0}),
    3: Cube({x:-1,y:0,z:0}),
    4: Cube({x:0,y:0,z:0}),
    5: Cube({x:1,y:0,z:0}),
    6: Cube({x:-1,y:-1,z:0}),
    7: Cube({x:0,y:-1,z:0}),
    8: Cube({x:1,y:-1,z:0}),
  }
  _.forEach(face, (value,key) => {
    value.geometry.faces[11].color.setHex(0x2962FF)
    value.geometry.faces[10].color.setHex(0x2962FF)
  })
    face[2].geometry.faces[8].color.setHex(0x2962FF)

    face[5].geometry.faces[8].color.setHex(0x2962FF)

  return face;

}


export default BottomFace
