 
 // Calculadora de partidas rankeadas

    let vitorias = 0
    let derrotas = 0
    let saldoVitorias = vitorias - derrotas
    var nivelJogador = ""
 
function quantidadeVitorias(nivelJogador) {
       

    if (saldoVitorias >=1 && saldoVitorias <= 10) {
        nivelJogador = "Ferro"
        console.log(nivelJogador)
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivelJogador = "Bronze"
        console.log(nivelJogador)
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivelJogador = "Prata"
        console.log("O herói tem de saldo " + saldoVitorias + " está no nível de " + nivelJogador)
    }else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivelJogador = "Ouro"
        console.log("O herói tem de saldo " + saldoVitorias + " está no nível de " + nivelJogador)
    }else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivelJogador = "Diamante"
        console.log("O herói tem de saldo " + saldoVitorias + " está no nível de " + nivelJogador)
    }else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivelJogador = "Lendário"
        console.log("O herói tem de saldo " + saldoVitorias + " está no nível de " + nivelJogador)
    }else if (saldoVitorias >= 101) {
        nivelJogador = "Imortal"
        console.log("O herói tem de saldo " + saldoVitorias + " está no nível de " + nivelJogador)
    }else{
        console.log("Seu jogador não tem quantidade de vitórias necessária para ser rankeado.")
        console.log("O herói tem de saldo " + saldoVitorias)
    }

}

quantidadeVitorias();

