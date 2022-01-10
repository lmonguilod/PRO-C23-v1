class Box {

  
  constructor(x,y,width,height){

    var options ={

      'restitution': 1
     // 'friction':0.3,
     // 'density':1.0

    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

  }

  display(){

    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("write");
    rect(0, 0, this.width, this.height);
    pop();

  }
    /*
    push(): captura a nova configuração;
    pop(): reverte para a configuração anterior;
    translate(): para alterar o 0 do eixo para uma determinada posição x e y;
    */
   

    
}























/*class Box {
  constructor(x,y,width,height) {
    

    var options ={

      'restitution':0.8,
      'friction':0.3,
      'density':1.0

    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
    
  }

  display(){

    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y); 
    rotate(angle);

    rectMode(CENTER);
    fill("white");
    rect(0, 0, this.width, this.height);
    pop();

    /*
    push(): captura a nova configuração;
    pop(): reverte para a configuração anterior;
    translate(): para alterar o 0 do eixo para uma determinada posição x e y;
    
   
  }
    
}
*/