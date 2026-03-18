/* ==========================================================
   AULA 06: EVENTOS DOM - TECHFOOD
   CORREÇÃO: Eventos aplicados para funcionar em todos os dispositivos
   ========================================================== */

// 1. SAUDAÇÃO DINÂMICA (Base Aula 5)
const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
}

// 2. CÁLCULO DE PREÇO DINÂMICO (Aula 6)
const btn = document.querySelector('.btn-pedido')
const inputQtd = document.querySelector("#qtd-lasanha");
const precoTexto = document.querySelector("#preco-lasanha");

if (inputQtd && precoTexto) {
    inputQtd.addEventListener("input", () => {
        const precoUnitario = 45.0;
        const total = Number(inputQtd.value) * precoUnitario;
        precoTexto.textContent = `R$ ${total.toFixed(2)}`;

        // Mudança sutil de cor se o valor for alto (Feedback Visual Aula 6)
        precoTexto.style.color = total > 150 ? "#c0392b" : "#e67e22";
    });
}

//2. Adicionamos o 'ouvinte' (Evento, Função)

btn.addEventListener('click', function() {
    //LINHA A LINHA: Quando o clique ocorrer, este bloco será executado
    console.log("O vigia detectou um clique no botão!")
    btn.textContent = "Procesando..."
})

//3. Adicionando ouvinte compartilhado (classe) EVENT.TARGET

const massas = document.querySelector("#secao-massas")
massas.addEventListener('click', (event) => {
    const clicado = event.target
    if (clicado.classList.contains('btn-pedido')) {
        console.log("Você clicou em um botão de pedido de massa")
    }
})