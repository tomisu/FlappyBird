


export default class JonController {
  constructor(jump) {
    /*
    ** Jump is a function that accepts a jump strength (1-3) and makes the bird jump.
    ** The higher the strength, the bigger the jump
    */
    this.jump = jump;
    this.name = 'Jon';
    this.pipenum=0;
    this.pipe={x: 100, isTop: false, pipeHeight: 200, pipeWidth: 200};
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
    
    if (pipes){

        this.pipe=pipes[this.pipenum];
    }
    if (birdData.y > scene.height - scene.floor - 10) {
      this.jump(3);

    }
    
    if (this.pipe!=undefined){
        if (this.pipe.x<birdData.x-this.pipe.pipeWidth){
            this.pipenum=this.pipenum+1;
            
        }
        if (this.pipe.isTop){
            if (birdData.y < scene.height/2 - scene.floor + this.pipe.pipeHeight ) {
                    

            }

            }else{
                if (birdData.y < scene.height - scene.floor + this.pipe.pipeHeight +  40  ) {

                    if (birdData.y > scene.height - this.pipe.pipeHeight - 20) {
                        this.jump(2);

                    }

                }
            }
        }else{

            if (birdData.y > scene.height/2 - scene.floor - 10) {
        this.jump(3);

    }

        }



    
  }
}

export const color = 0xff00ff;