let img = document.getElementById('img')
let buttons= document.querySelector('#button')
let index = 0
let interval = null
//# -> pra class
//. -> pra id 

//event target retorna o estado do evento
const traficlig = (event)=>{
    stop()
    turnon[event.target.id]()
}

const nextindex = () =>{
    index = index<2?++index : 0
 }

const stop = () => {
    clearInterval()
}

const mudarcor = () =>{
    const cores = ['red', 'yellow', 'green']
   const color = cores[index]
   turnon[color]()
   nextindex()
}

const turnon = {
    'red': () => img.src = 'imagens/vermelho.png', 
    'green': () => img.src = 'imagens/verde.png', 
    'yellow': () => img.src = 'imagens/amarelo.png',
    'automatic': () => interval = setInterval(mudarcor, 1000)

    //setTimeOut gera um pausa antes de executar algo
    //setInterval um intervalo de looping faz algo
}

buttons.addEventListener('click', traficlig)