export default class TomasController {
  constructor(jump) {
    /*
    ** saltar es una función que acepta una fuerza de salto (1-3) y hace que el pájaro salte.
    ** Cuanto mayor sea la fuerza, mayor será el salto
    */
    this.jump = jump;
    this.name = 'Tomás';
    this.tiempoUltimoSalto = 0; // Rastrear el tiempo desde el último salto
  }

  loop(birdData, pipes, scene, dt) {
    /*
    ** Esta función se llama en cada frame.
    **
    ** birdData = {x: int, y: int, velocidad: int }
    ** pipes = array de Tuberia
    ** Tuberia = {x: int, isTop: boolean, pipeHeight: int, pipeWidth: int}
    ** scene: {width: 800, height: 600, floor: int (la altura del floor)}
    ** dt: milisegundos transcurridos desde la última actualización
    */

    // Margen de seguridad
    const margen_seguridad = 50;
    const altura_salto = 2;
    const intervalo_salto = 300; // Tiempo mínimo entre saltos en milisegundos
    const distancia_decision = 150; // Distancia de decision

    // Actualizar el tiempo desde el último salto
    this.tiempoUltimoSalto += dt;

    // Siguiente tubería
    const siguienteTuberia = pipes.find(pipe => pipe.x > birdData.x);

    if (birdData.y >= scene.height - scene.floor - margen_seguridad && this.tiempoUltimoSalto > intervalo_salto) {
      this.jump(altura_salto);
      this.tiempoUltimoSalto = 0;
      return;
    }

    if (siguienteTuberia && siguienteTuberia.x - birdData.x < distancia_decision) {
      // Calcular el hueco para que el pájaro pueda pasar
      const inicioHuecoY = siguienteTuberia.isTop ? siguienteTuberia.pipeHeight + margen_seguridad : scene.height - siguienteTuberia.pipeHeight - scene.floor;

      // Tubería superior
      if (siguienteTuberia.isTop) {
        if (birdData.y < inicioHuecoY - margen_seguridad && this.tiempoUltimoSalto > intervalo_salto) {
          // Saltar solo si el pájaro está en una posición segura para evitar chocar con la tubería superior
          this.jump(1);
          this.tiempoUltimoSalto = 0;
        }
      }
      // Tubería inferior
      else {
        if (birdData.y > scene.height - siguienteTuberia.pipeHeight - scene.floor - margen_seguridad && this.tiempoUltimoSalto > intervalo_salto) {
          this.jump(altura_salto);
          this.tiempoUltimoSalto = 0;
        }
      }
    } else {
      // Si no hay tuberías, mantener en el medio
      if (birdData.y > scene.height / 2 && birdData.y < scene.height - margen_seguridad && this.tiempoUltimoSalto > intervalo_salto) {
        this.jump(1);
        this.tiempoUltimoSalto = 0;
      }
    }
  }
}

export const color = 0xff00ff;