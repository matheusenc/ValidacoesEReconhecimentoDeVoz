function verificaChute(chute){
    const numero = +chute;
    if(numeroForInvalidado(numero)){
        if(chute.toUpperCase() === 'GAME OVER'){
            document.body.className = 'game-over';
            document.body.innerHTML = 
                `
                    <h1>Game Over</h1>
                    <h3>Pressione o botão para jogar novamente</h3>
                    <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
        }else{
            elementoChute.innerHTML += `<div>Valor inválido</div>`
        }
    }else if(numeroForMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>Valor inválido, fale um numero entre ${menorValor} e ${maiorValor}</div>`    
    }else if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML +=`<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function numeroForInvalidado(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})