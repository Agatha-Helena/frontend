/* const usuarion = prompt("Por favor digite seu primeiro nome: ")

const usuarios = prompt("Agora informe seu sobrenome: ")

let user = usuarion.trim().toLowerCase()  + " " + usuarios.trim().toLowerCase()

alert("Veja se deu certo. Seu nome e sobrenome é: " + user)

alert("O seu nome e sobrenome possuem juntos " + user.length + " caracteres, contando com o espaço entre eles.") */

/* ------------------------------------------------------------------ */

/* const conta = prompt("Digite o total que deve ser pago: ")

const pessoas = prompt("Digite o número de pessoas na mesa: ")

let valor = conta / pessoas

alert("Cada pessoa deve pagar R$" + valor.toFixed(2)) */

/* ------------------------------------------------------------------ */

/* const compra = prompt("Digite o valor da compra: ")

const cupom = prompt("Você tem um cupom? Digite sim ou não: ")

if (compra > 150 && cupom.toLowerCase() === "sim"){
    console.log("Frete grátis liberado!")
} else {
    console.log("Frete pago!")
} */

/* ------------------------------------------------------------------ */

/* const num = prompt("Escolha um número aleatório de 1 a 10: ")

numale = (Math.random() * 10)

numsort = Math.round(numale)

if (num === numsort){
    alert("Parabéns, você ganhou um brinde!")
} else {
    alert("Que pena, o número sorteado foi " + numsort)
} */

/* ------------------------------------------------------------------ */

class Veiculo{
    constructor(modelo, marca, ano){
        this.modelo = modelo,
        this.marca = marca,
        this.ano = ano
    }
    idadeVeiculo(calculo){
        return "Seu veículo tem " + calculo + " anos."
    }
}

const ano = prompt("Digite o ano do seu veículo: ")

let atual = new Date()

const idade = atual - ano

alert("Modelo: " + modelo + " | Idade: " + idade)

/* Não testado e não finalizado!
Última atualização: 22:56*/
