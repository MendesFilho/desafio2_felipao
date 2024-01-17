 // Calculadora de partidas rankeadas

 let vitorias = 0
 let derrotas = 0
 let nivelJogador = ""
 let saldoVitorias = vitorias - derrotas
 
function quantidadeVitorias(nivelJogador) {
   

    if (saldoVitorias >=1 && quantidadeVitorias <= 10) {
        nivelJogador = "Ferro"
        console.log(nivelJogador)
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivelJogador = "Bronze"
        console.log(nivelJogador)
    }else{
        console.log("Seu jogador não tem quantidade de vitórias necessária para ser rankeado.")
        console.log(saldoVitorias)
    }


}

quantidadeVitorias()



