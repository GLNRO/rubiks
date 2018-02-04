import React, { Component } from 'react';
import * as THREE from 'three';

const setupSceneLights = () => {
  let positions = [[15,15,15],[-15,-15,-15],[-15,15,-15],[15,-15,15]]
  let lights = []
   lights.push(new THREE.AmbientLight( 0x404040 ));
  _.forEach(positions, (pos) => {
    let light = new THREE.DirectionalLight( {color: 0xffffff, intensity: .1} )
    light.position.set(pos[0],pos[1],pos[2]);
    lights.push(light)
    })
  return lights
}

export {setupSceneLights}
