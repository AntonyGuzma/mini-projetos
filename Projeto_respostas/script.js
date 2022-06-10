//let pode ser alterado o valor / cont não eh possivel alterar o seu valor
const pergusuario = document.getElementById('perg')
const resposta = document.querySelector("#resposta")
const botaoperg = document.getElementById("buttonperguntar")

const resp = [  //vetores com respostas prontas para questoes
    "Talvez","Não tenho tanta certeza." ,
    "É decididamente assim." ,
    "Não conte com isso." ,
    "Sem dúvidas!" ,
    "Pergunte novamente mais tarde." ,
    "Sim, definitivamente!" ,
    "Minha resposta é não." ,
    "Você pode contar com isso." ,
    "Melhor não te dizer agora." ,
    "A meu ver, sim." ,
    "Minhas fontes dizem não." ,
    "Provavelmente." ,
    "Não é possível prever agora." ,
    "Perspectiva boa." ,
    "As perspectivas não são tão boas." ,
    "Sim." ,
    "Concentre-se e pergunte novamente." ,
    "Sinais apontam que sim." ,
]

function fazerperg(){
    /*Sorter numero do tamanho do vetor resp*/
    if(pergusuario.value == ""){
        window.alert('Informe Uma Pergunta :)')
        return
    }
    botaoperg.setAttribute('disabled', true) //habilita o botão de realizar pergunta

    const aleatorio = Math.floor(Math.random() * resp.length) 
    resposta.innerHTML = resp[aleatorio] //Usando DOM

    resposta.style.opacity = 1;
    //Sumir a resposta dps de um determinado tempo
    setTimeout(function(){
        resposta.style.opacity = 0;
        botaoperg.removeAttribute('disabled') //O botao fica desabilitado por 3 s
    }, 3000)

}

