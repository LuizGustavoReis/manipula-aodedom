 // document e um objeto 
 /*function teste(variavel1,variavel2){
 console.log("variavel1");
 console.log("variavel2");

 }
 teste("abc","cba");
 */


/* const botao = document.getElementById('btn');
 console.log(botao);
 botao.innerText = "Aberto";//innertext funçao ou propriedade com o (.) de um objeto 
 botao.style.color = "#00FF00";
 botao.style.fontSize="36px";

function AbrirFecharLoja(){
    if(botao.innerText == "Aberto"){
        botao.innerText = "fechado";
    botao.style.color = "#FF0000";

    }else{
        botao.innerText = "Aberto";
        botao.style.color = "#00FF00";
    }
}*/


function calcular(){
    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;
    const operacao = document.getElementById("operacao").value;
    
    let total = 0

    if(operacao == "1" ){

        

        total = parseInt(valor1) + parseInt(valor2);
        

    }else if(operacao == "2"){
        total = parseInt(valor1) - parseInt(valor2);
        


    }else if(operacao == "3"){
        total = parseInt(valor1) * parseInt(valor2)

    }else if(operacao == "4"){
        total = parseInt(valor1) / parseInt(valor2);
    }else{

    }
    //-------------------- Historico

    const itemoperacao = document.createElement("li");//objeto
    itemoperacao.innerText = "valores:"+ valor1 +","+ valor2+"- total:"+total;//criou um valor para o objeto
    const listaoperacoes = document.getElementById("listaoperacoes");// cria uma variavel q leva o objeto 
    listaoperacoes.appendChild(itemoperacao); //adiciona novo 

}

 
 