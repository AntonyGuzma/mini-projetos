//Criando Uma array de objetos contendo o audio e legenda que serao alterados pelo DOM

let audios = [
    {caminho: 'audios/grito.mp3', legenda: 'Grito'},
    {caminho: 'audios/jesus.mp3', legenda: 'Jesus'},
    {caminho: 'audios/nao-e-o-pai.mp3', legenda: 'Ele Nao eh Pai'},
    {caminho: 'audios/pare.mp3', legenda: 'Pare'},
    {caminho: 'audios/que-isso-meu-filho.mp3', legenda: 'Que Isso'},
    {caminho: 'audios/ratinhoo.mp3', legenda: 'RATINHO'},
    {caminho: 'audios/uepa.mp3', legenda: 'Uepa'},
    {caminho: 'audios/vixi-ratinho.mp3', legenda: 'VIXI'},
    {caminho: 'audios/xaropinho.mp3', legenda: 'Xaropinho'},
]


let botoes = document.querySelectorAll('.botao')
let legendas = document.querySelectorAll('p')
let audio = document.querySelector('audio')

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data', i);
}

//Ler os btoes encontrados com foreach

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data')]; 

        //add o atributo de diretorio do audio
        audioTag.setAttribute('src', som.caminho);
        
        //Quando o audio carregar ira executa-lo
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});
