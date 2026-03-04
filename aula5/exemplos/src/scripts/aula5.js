/* MODO ANTIGO
const listaCards = document.getElementsByClassName("card")

const links = document.getElementsByTagName("a")

const topo = document.getElementById("topo_loja")

console.log("1. O elemento TOPO: ", topo)
console.log("2. O primeiro card da lista: ", listaCards[0])
console.log("3. A lista completa de links: ", links)
console.log("4. O endereço (URL) do primeiro link: ", links[0].href)
console.log("5. A cor do cabeçalho: ", topo.style.backgroundColor) */

const tituloNhoque = document.querySelector('#card-nhoque h3')

const botoesCompra = document.querySelectorAll('.bnt-pedido')

const terceiroCard = document.querySelector('.card:nth-child(3)')

console.log("1. Mostrando o título Nhoque (pelo ID)", tituloNhoque)

console.log("2. Quantidade de botões de pedido: ", botoesCompra.length)

console.log("3. A terceira posição da class .card: ", terceiroCard)

const imgLasanha = document.querySelector('img[alt= "Lasanha Tech"]')

if(tituloNhoque){
    console.log("Título CAPTURADO: ", tituloNhoque.innerText)
}

const saudacao = document.querySelector('#boas-vindas')

const agora = new Date()
const hora = agora.getHours()

saudacao.textContent = hora < 18 ? "Bem-vindo, bom almoço" : "Bem-vindo, boa janta"

const nomeCompleto = document.querySelector('#nome')

nomeCompleto.innerHTML = "Hello World"

const foto = document.querySelector('#foto-destaque')

const caminhoAtual = foto.getAttribute('src')