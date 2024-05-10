alert('Boas vindas ao jogo do número secreto'); // emite um alerta de boas vindas
let numeroMaximo = 5000; // define numero maximo de chutes
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // numero secreto
console.log(numeroSecreto); // 
let chute;
let tentativas = 1; // numero de tentativas

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) { // define o que vai acontecer caso o usuario acerte o numero secreto
        break;
    } else { // caso o numero secreto nao seja descoberto
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`); // se menoor ao numero chutado este alerta sera emitido
        } else {
            alert(`O número secreto é maior que ${chute}`); // se maior ao numero chutado este alerta sera emitido
        }
        // tentativas = tentativas + 1;
        tentativas++; // tentar novamente
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // quando o numero secreto for descoberto esse comando sera executado
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }
