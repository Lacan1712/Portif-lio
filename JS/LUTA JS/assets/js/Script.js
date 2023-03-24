class Personagem{
    _life = 100;

    constructor(x, y, image){
        this.positionX = x;
        this.positionY = y;
        this.img = image;
    }

    get life(){
        return this._life;
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }





    //rendenriza imagem do personagem
    render(ctx, largura, altura){
        ctx.drawImage(this.img, this.positionX, this.positionY, largura, altura)
    }
    //ação de andar
    move()[

    ]


}