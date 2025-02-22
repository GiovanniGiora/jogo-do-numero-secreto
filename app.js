let listaDeNumeroSorteado = []
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio() ;
let tentativas = 1

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Famale',{rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value; 

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Parabéns! Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela('p', mensagemTentativa );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute} `);
        } else {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
        tentativas++; 
        limparCampo()
    }
}
    

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length ;

    if(quantidadeDeElementosNaLista == numeroMaximo ){
        listaDeNumeroSorteado = [];
    }


    if(listaDeNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteado.push(numeroEscolhido);
        return numeroEscolhido;
    }
    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '' ;
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}