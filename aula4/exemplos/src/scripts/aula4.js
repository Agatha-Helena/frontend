const tempoAgora = new Date()

const hora = tempoAgora.getHours()

const dataFormatada = tempoAgora.toLocaleDateString('pt-Br')
const horaFormatada = tempoAgora.toLocaleTimeString('pt-Br')

console.log("Hoje é dia: " + dataFormatada)
console.log("Horário: " + horaFormatada)

if (hora > 12 && hora < 18){
    alert("Boa tarde!")
} else if (hora > 18 && hora < 24){
    alert("Boa noite!")
}