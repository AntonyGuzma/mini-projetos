let musica = document.querySelector('audio')
let indexmusica = 0
let duracaomusica = document.querySelector('.fim')
let imagem = document.querySelector('img')
let nomemusica = document.querySelector('.descricao h2')
let nomeartista = document.querySelector('.descricao i')

//Vetor com objetos que são as musicas 
let musicas = [
    {titulo: 'indie', artista: 'Alex Turner', src: 'musicas/dowanna.mp3', img:'imagens/dark.jpg'},
    {titulo: 'pop', artista: 'Danz', src: 'musicas/dark.mp3', img:'imagens/artic.jpg'}

]

renderizarmusica(indexmusica)

//acessei um elemento do html e criei um evento de click 
document.querySelector('.btnplay').addEventListener('click', tocarmsc)

//evento a clicar no botao proximo usando funcao anonima
document.querySelector('.proxima').addEventListener('click', () =>{ 
    indexmusica++
    if(indexmusica > 1){
        indexmusica = 1;
    }
    pausarmsc() 
    renderizarmusica(indexmusica)
})

//evento a clicar no botao voltar usando funcao anonima
document.querySelector('.voltar').addEventListener('click', () =>{ 
    indexmusica--
    if(indexmusica < 0){
        indexmusica = 1;
    }
    pausarmsc()     
    renderizarmusica(indexmusica)
})

//evento pra barrinha de tempo de musica se mover
musica.addEventListener('timeupdate', atualizarbarra)

//Evento do click no botao pouse
document.querySelector('.btnpouse').addEventListener('click', pausarmsc)


function renderizarmusica(index){
    musica.setAttribute('src', musicas[index].src)
    //  toda vez que a musica for trocada realizar o evendo loadeddata (recarregar os dados da musica)
    musica.addEventListener('loadeddata', () => {
        nomemusica.textContent = musicas[index].titulo
        nomeartista.textContent = musicas[index].artista
        imagem.src = musicas[index].img
        duracaomusica.textContent = segundoparaminutos(Math.floor(musica.duration))
    })
}

function tocarmsc(){
    musica.play()
    document.querySelector('.btnpouse').style.display = 'block'
    document.querySelector('.btnplay').style.display = 'none'
}


function pausarmsc(){
    musica.pause()
    document.querySelector('.btnpouse').style.display = 'none'
    document.querySelector('.btnplay').style.display = 'block'
}

function atualizarbarra(){
    let barra = document.querySelector('progress')

    //duration retorna o tamanho da do audio em segundo
    //currentTime retorna o esta atual do audio 
    //math floor arredonda o valor quebrado
    barra.style.width = Math.floor((musica.currentTime / musica.duration)*100) + '%'

    let tempocorrido = document.querySelector('.inicio')

    tempocorrido.textContent = segundoparaminutos(Math.floor(musica.currentTime))   
    
}

function segundoparaminutos(segundos){
    let campominuto = Math.floor(segundos/60)
    let camoposegundo = segundos%60
    if(camoposegundo < 10){
        camoposegundo = '0' + camoposegundo 
    }
    return campominuto + ':' + camoposegundo
}

