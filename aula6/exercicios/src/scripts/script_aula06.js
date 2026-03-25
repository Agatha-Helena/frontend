/* INTERAÇÃO ----------------------------------------------- */

const curtidas = document.querySelector('#btn-curtir')
const curtido = document.querySelector('#contador')
let conta = 0
curtidas.addEventListener('click', () => {
    curtido.textContent  = conta++
    console.log('Botão clicado')
});


/* MONITORAMENTO ----------------------------------------------- (deu certo) */

const textoagora = document.querySelector('#campo-texto')
const textodigitado = document.querySelector('#preview-texto')

textoagora.addEventListener('input', () => {
    textodigitado.textContent = "Digitando: " + textoagora.value
});


/* SENSORES ----------------------------------------------- (deu certo)*/

const area = document.querySelector('#caixa-cor');
area.addEventListener('mouseover', () => {
    area.style.backgroundColor = "#457ffc"
});

area.addEventListener('mouseout', () => {
    area.style.backgroundColor = "#cfcfcfaa"
})

/* DESAFIO ----------------------------------------------- */

//???????????????????????????????????????????????????