export default class TomasController {
  constructor(saltar) {
    this.saltar = saltar;
    this.name = 'Svetla';
  }

  loop(datosPajaro, tuberias, escena, dt) {
    // Salta si el pájaro está a punto de tocar el suelo
    if (datosPajaro.y > escena.height - escena.floor - 25) {
      this.saltar(2);
    }

    // Encuentra la tubería más cercana (aquella que está frente al pájaro)
    let tuberiaCercana = tuberias.find(tuberia => tuberia.x > datosPajaro.x);

    if (tuberiaCercana) {
      // Distancia del pájaro a la tubería más cercana
      let distanciaATuberia = tuberiaCercana.x - datosPajaro.x;

      // Lógica para tuberías superiores
      if (tuberiaCercana.isTop) {
        // Si el pájaro está en peligro de colisionar con una tubería superior, dejar de saltar
        if (distanciaATuberia < 150 && datosPajaro.y <= tuberiaCercana.pipeHeight + 10) {
          return;  // No saltar, ya que está cerca de una tubería superior
        }
      } else {
        // Lógica para tuberías inferiores
        if (distanciaATuberia < 160 && datosPajaro.y > tuberiaCercana.pipeHeight) {
          this.saltar(1);  // Salto medio si está cerca de una tubería inferior
        } else if (distanciaATuberia < 100 && datosPajaro.y > tuberiaCercana.pipeHeight) {
          this.saltar(2);  // Salto máximo si está muy cerca de una tubería inferior
        }
      }
    }
  }
}

export const color = 0xff00ff;
