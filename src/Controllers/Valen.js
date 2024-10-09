export default class ValenController {
    constructor(jump) {
        this.jump = jump;
        this.name = 'Valen';
    }

    loop(birdData, pipes, scene, dt) {
        let closestPipe = null;
        let closestBottomPipe = null;

        // Detectar el tubo más cercano al pájaro
        for (let pipe of pipes) {
            if (pipe.x > birdData.x) {
                // Encuentra el tubo superior más cercano
                if (pipe.isTop && (!closestPipe || pipe.x < closestPipe.x)) {
                    closestPipe = pipe;
                }
                // Encuentra el tubo inferior más cercano
                if (!pipe.isTop && (!closestBottomPipe || pipe.x < closestBottomPipe.x)) {
                    closestBottomPipe = pipe;
                }
            }
        }

        // Evitar que el pájaro baje demasiado
        if (birdData.y > scene.height - scene.floor - 10) {
            this.jump(3); // Salto alto si está cerca del suelo
            return;
        }

        // Verificar si el pájaro está en el aire (con velocidad negativa)
        const isInAir = birdData.speed < 0; // Consideramos que está en el aire si la velocidad es negativa

        // Si hay un tubo superior cercano
        if (closestPipe) {
            const distanceToTopPipe = closestPipe.pipeHeight - birdData.y;

            // Ajustar condiciones para saltar y evitar el techo
            if (distanceToTopPipe > 0 && distanceToTopPipe < 50) {
                this.jump(1); // Salto suave para evitar el tubo superior
            }
        }

        // Si hay un tubo inferior cercano
        if (closestBottomPipe) {
            const gapY = closestBottomPipe.pipeHeight; // Altura del borde superior del tubo inferior
            const distanceToBottomPipe = birdData.y - gapY;

            // Salto solo si el pájaro está cerca del tubo inferior
            if (distanceToBottomPipe > 0 && distanceToBottomPipe < 50) {
                this.jump(2); // Salto medio para evitar el tubo inferior
            }
        }

        // Si el pájaro está en el aire y hay un tubo cercano
        if (isInAir) {
            if (closestPipe && closestPipe.x - birdData.x < 100) { // Ajustar distancia a los tubos
                // Saltar solo si el pájaro está por debajo del borde superior
                if (birdData.y < closestPipe.pipeHeight) {
                    this.jump(1); // Salto suave para evitar el tubo superior
                }
            }
            if (closestBottomPipe && birdData.y > closestBottomPipe.pipeHeight - 50) {
                this.jump(2); // Salto medio para evitar el tubo inferior
            }
        }
    }
}

export const color = 0xff00ff; // Color del pájaro (morado)
