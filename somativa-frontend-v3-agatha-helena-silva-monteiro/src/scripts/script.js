/* Missão 1 -------------------------------------- (feito)*/

const agora = new Date().getHours();
const saudacao = document.querySelector('#saudacao-livraria');
if (agora < 12){
    saudacao.textContent = "Boa leitura matinal!"
} if (agora >= 12 && agora < 18){
    saudacao.textContent = "Aproveite a tarde para ler!"
} if (agora >= 18){
    saudacao.textContent = "Uma boa história antes de dormir?"
};

/* Missão 2 -------------------------------------- (feito) */

const area = document.querySelector('#banner-cultura');
area.addEventListener('mouseover', () => {
    area.classList.add('tema-sepia')
});
area.addEventListener('mouseout', () => {
    area.classList.remove('tema-sepia')
});

/* Missão 3 -------------------------------------- (não finalizado) */

/* class Livros {
    constructor(nome, preco){
        this.nome = nome,
        this.preco = preco
    }
}

const livro = new Livros ("Teste", 42.00)*/

const qtd = document.querySelector('#qtd-livros');
const total = document.querySelector('#total-pagar')
total.addEventListener('input', () => {
    console.log("Número adicionado")
    total.value = qtd.value() * 42
});

/* Missão 4 --------------------------------------(não finalizado, não compreendido) */

const add = document.querySelector('#btn-lista')
const titulo = document.querySelector('#nome-livro')
const lista = document.querySelector('#lista-leitura')

add.addEventListener('click', () => {
    /* console.log("botão clicado") */
    if(titulo.value == ""){
        console.warn("Digite um título válido!")
    } /* else {
        titulo.innerHTML += `<article class="card-leitura"><h3>${'📖 Título: [NOME DO LIVRO AQUI]'}</h3></article>`
    } (???)*/
})

/* Missão 5 --------------------------------------(não finalizado) */

const del = document.querySelector('#btn-limpar')

del.addEventListener('click', () => {
    
})

/* --------------------------------------status: projeto abandonado, preparação para recuperação */