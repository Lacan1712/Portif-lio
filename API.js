//Aqui será mostrado exemplos simples de como obter respostas de uma API
//Usando o fetch()


//Criando função anônima para requisição
let url = "https://jsonplaceholder.typicode.com/posts"
function api(url){
    //Função fetch do js para request em API's
    fetch(url)
    //O primeiro parâmetro 'data' é objeto retornado com as informçãoes da API     
    .then((response) =>{
            //Função que retorna um objeto que primariamente era JSON para JS
            return response.json();   
    })
    .then((data) => {
        console.log(data); //Mostrando o objeto em js da request
    })
    .catch((error) =>{     //Captura de erros para tratamento
        console.log("Falha no fetch");
        console.log(error);



    });            //Tratamento de erro na promise
              
}