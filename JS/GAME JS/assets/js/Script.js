class Personagem{
    _life = 100;
    element;
    mouseX;
    mouseY;
    constructor(x, y, image){
        this._positionX = x;
        this._positionY = y;
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

    //get positionX e get PositionY
    getPositionX(){
        this._positionX
    }
    getPositionY(){
        this._positionY
    }

    //set positionX e positionY
    setPositionX(newPX){
        this._positionX = newPX;
    }
    setPositionY(newPY){
        this._positionY = newPY;
    }


    //Método que define posição inicial do elemento
    position(){
        this.element.style.left = this._positionX + "px";
        this.element.style.top = this._positionY + "px";

    }

    //Método que rotaciona o elemento de acordo com o mouse
    moveRotate(X, Y){
            //Capturar parametros da localização do mouse 
            this.mouseX = X,
            this.mouseY = Y;
            //Obtendo ponto do centro do elemento
            var naveX = this.element.offsetLeft + (this.element.offsetWidth / 2);
            var naveY = this.element.offsetTop + (this.element.offsetHeight / 2);
    
            //Calcular ângulo de rotação
            var radianos = Math.atan2 (this.mouseY - naveY, this.mouseX - naveX);
            var angulo = radianos * (180 / Math.PI);
    
            //Definindo propriedade transforme ao elemento (nave)
            this.element.style.transform = 'rotate(' + angulo + 'deg)';
    }
    
    
    



}