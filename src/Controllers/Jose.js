

export default class JoseController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'José Mari';
  }

  loop(birdData, pipes, scene, dt) {
    /*
    ** This function is called every frame.
    **
    ** birdData = {x: int, y: int, speed: int }
    ** pipes = array of Pipe
    ** Pipe = {x: int, isTop: boolean, pipeHeight: int, pipeWidth: int}
    ** scene: {width: 800, height: 600, floor: int (the floor height)}
    ** dt: milliseconds elapsed since last update
    */

    // CORRECCIÓN: Ya veo! No era lo que había que hacer, pero al menos habéis sacado algo con sentido.
    // Lo valoro :)
    // Como comentario, este problema de "cosa = this" tiene fácil éxplicación y solución.
    // Cuando usas `function`, haces que dentro de la función, `this` sea la propia función. Cosa... que no es muy útil.
    // Para solucionarlo, puedes hacer lo que habéis hecho, o algo un poquito menos engorroso, que es usar una arrow function.
    // Es decir:
    // document.addEventListener('keydown', event => { /* Tu función */}) 
    // Estas arrow functions, además de ser un poco más cortas, no cambian el significado de `this`.
    // Se usan constantemente!

    var cosa = this;
    document.addEventListener('keydown', function (event) {
      if (event.code == 'Space') {
        cosa.jump(2);
      } else if (event.code == 'Enter') {
        cosa.jump(1);
      }
    });
  }
}

export const color = 0xff00cc;
