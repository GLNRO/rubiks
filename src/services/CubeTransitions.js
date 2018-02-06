import _ from 'lodash';

export const rightTurn = (cubeState) => {
  let cubes = cubeState
  let translationMapping = {
    A: cubeState.G,
    D: cubeState.P,
    G: cubeState.Y,
    J: cubeState.D,
    M: cubeState.M,
    P: cubeState.N,
    S: cubeState.A,
    N: cubeState.J,
    Y: cubeState.S
  }
  _.forEach(translationMapping, (value,key) => {
    cubes[key] = value
  })
  return cubes
}


export default { rightTurn }
