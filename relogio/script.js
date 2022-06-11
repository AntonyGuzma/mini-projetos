function horas(){
    var display = document.querySelector('.display')

    var agora = new Date() //instancia o objeto hora    

    var horario = corrigirhorario(agora.getHours() ) + ":" + corrigirhorario( agora.getMinutes()) + ":" + corrigirhorario(agora.getSeconds())
    console.log (horario)   

    display.textContent = horario //Usando DOM
}

function corrigirhorario(numero){
    if(numero < 10){
        numero = '0' + numero
    }
    return numero
}

horas()
//setinterval executa o parametro passado pelo tempo determinado
setInterval(horas, 1000)