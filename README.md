# Flappy Bird Bots
En esta aplicación es un clon del juego Flappy Bird, en el que podrás programar tu propio Controlador para intentar sacar la máxima puntuación.


## Cómo crear un controlador
1) Clona el controlador de ejemplo (`Tomas.js`) y renómbralo con tu nombre (no uses tildes ni caracteres especiales).
2) Añade el nombre de tu archivo a la lista de `ControllerList`.


## Modificando el controlador
Cambia `this.name` por el nombre que quieras que aparezca en pantalla.

Usa la función `loop` para programar tu controlador.
Esta función se llama cada frame, y recibe los siguientes parámetros:

* `birdData`: un objeto con los datos de tu pájaro:
```
  {
    x: int, // -> `Posición x`
    y: int, // -> `Posición y`
    speed: int, // -> La velocidad a la que viaja verticalmente
  }
```

* `pipes`: un array de objetos tipo Pipe, describiendo las tuberías que hay en pantalla. Cada uno de ellos contiene estos valores:
```
{
  x: int, // -> Posición x de la tubería
  isTop: boolean,  // -> `true` si la tubería sale desde arriba, `false` si desde abajo
  pipeHeight: int, // -> la altura de la tubería
  pipeWidth: int, // -> la anchura de la tubería
}
```

* `scene`: un objeto que describe la pantalla:
```
{
  width: int, // -> El ancho de la pantalla
  height: int, // -> El alto de la pantalla
  floor: int, // -> El grosor del suelo, localizado en la parte baja de la pantalla
}
```

* `dt`: el tiempo en milisegundos desde la última vez que se llamó a la función.

