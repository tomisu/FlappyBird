export default class AitziberController {
  constructor(jump) {
    this.jump = jump;
    this.name = 'Aitziber';
  }

  loop(birdData, pipes, scene, dt) {
    const birdX = birdData.x;
    const birdY = birdData.y;
    const birdSpeed = birdData.speed;
    const floorY = scene.height - scene.floor;

    const FLOOR_MARGIN      = 20; // seguridad con el suelo
    const TOP_SAFE_MARGIN   = 20; // distancia mínima a la tubería de arriba
    const BOTTOM_SAFE_MARGIN = 20; // distancia mínima a la tubería de abajo

    // 1)Suelo
    if (
      birdY > floorY - FLOOR_MARGIN ||                      // muy cerca del suelo
      (birdY > floorY - FLOOR_MARGIN * 2 && birdSpeed > 3)  // cayendo rápido cerca del suelo
    ) {
      this.jump(3); // salto medio, no enorme
      return;
    }

    // 2) Si aún no hay tuberías, quedarse por la parte medio-baja de la pantalla
    if (pipes.length === 0) {
      const targetY = scene.height * 0.6;
      if (birdY > targetY + 20 && birdSpeed >= 0) {
        this.jump(2);
      }
      return;
    }

    // 3) Buscar la siguiente columna de tuberías por delante
    const pipesAhead = pipes.filter(p => p.x + p.pipeWidth >= birdX - 10);
    if (pipesAhead.length === 0) return;

    const nextX = Math.min(...pipesAhead.map(p => p.x));
    const sameColumn = pipesAhead.filter(p => Math.abs(p.x - nextX) < 5);

    const topPipe = sameColumn.find(p => p.isTop);
    const bottomPipe = sameColumn.find(p => !p.isTop);

    // 4) Hueco real entre tuberías
    const gapTopY    = topPipe    ? topPipe.pipeHeight                : 40;
    const gapBottomY = bottomPipe ? (floorY - bottomPipe.pipeHeight)  : (floorY - 40);

    // Zona segura interior (donde queremos estar)
    const innerTop    = gapTopY    + TOP_SAFE_MARGIN;
    const innerBottom = gapBottomY - BOTTOM_SAFE_MARGIN;

    // 5) Reglas:

    // Si estamos demasiado arriba (cerca de la tubería de arriba) → nunca saltar
    if (birdY < innerTop) {
      return; // dejar que caiga
    }

    // Si estamos dentro de la zona segura → no hacer nada
    if (birdY >= innerTop && birdY <= innerBottom) {
      return;
    }

    // Si estamos demasiado abajo dentro del hueco → saltar
    // Muy cerca de la de abajo → salto medio
    if (birdY > innerBottom + 10) {
      this.jump(2);
      return;
    }

    // Un poco por debajo de la zona segura y cayendo → salto suave
    if (birdY > innerBottom && birdSpeed >= 0) {
      this.jump(1);
      return;
    }

    // Si nada de lo anterior, no hacer nada
  }
}

export const color = 0xffffff;
