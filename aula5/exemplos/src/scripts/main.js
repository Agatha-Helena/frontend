console.log(window.location.href)

//H1 DA PÁGINA
const titulo = document.getElementById('titulo-site')

//
const saudacao = document.querySelector('#boas-vindas')

//FOTO DA LASANHA
const fotoPrato1 = document.querySelector('#foto-destaque')

//CARD DA LASANHA
const cardLasanha = document.querySelector('#card-lasanha')

const agora = new Date()
const hora = agora.getHours()

if (hora >= 1 && hora < 18){
    saudacao.textContent = "Boa Tarde!"
}
else if (hora >= 18 && hora <= 24){
    saudacao.textContent = "Boa noite!"
}
else {
    saudacao.textContent = "Hora do seu computador está com erro!"
}

fotoPrato1.alt = "Destaque do dia: Lasanha Bolonhesa!"

tituloPrincipal.style.color = #e67e22