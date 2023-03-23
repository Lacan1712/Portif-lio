//Criando uma classe
//Classe baseada em Pessoa
class Person{
    _name;
    _age = 0;
    _id;
    static hands = 2;  /*Ap definir como 'static' a referência deixa de ser do objeto instaciado e passa a ser da Classe Person */
    _cpf;

    constructor(name, id, cpf){ //Criação da classe construtora
        this.name = name;
        this.id = id;
        this.cpf;
    }

    aniver(){
        this.age ++;
        console.log("Feliz aniverário!");
    }

//Getters and Setters
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }

//Id-----------------------//
    get id(){
        return this._id;
    }
    set id(newId){
        this._id = newId
    }

//cpf--------------------//
    get cpf(){
        return this._cpf
    }
    set cpf(newCpf){
        this._cpf = newCpf;
    }

}


//Instanciado a classe Pessoa

let pessoa_1 = new Person("Rodrigo Lacan","17","001","123.456.789-00")

//Actions em objetos
pessoa_1.aniver;

//Heranças 
class Funcionario extends Person{ //Extends faz herdar as propriedades e funções da classe Person para a classe Funcionário

    constructor(name, cargo, data_inicio, data_fim){
        super(name); //super indica a propriedade da classe pai
        this.cargo = cargo;
        this.data_inicio = data_inicio;
        this.data_fim = data_fim;


    }



}