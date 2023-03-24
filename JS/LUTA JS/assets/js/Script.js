class Personagem{
    _life = 100;
    element;
    constructor(x, y, image){
        this.positionX = x;
        this.positionY = y;
        this.element = image;
    }

    //get life
    get life(){
        return this._life;
    }

    //set life
    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }


    position(){
        this.element.style.left = 50 + "px";
        this.element.style.left = 50 + "px";

    }
    
    
    


}