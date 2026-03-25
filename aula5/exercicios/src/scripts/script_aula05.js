const nome = document.querySelector("#nome-usuario") //vai selecionar a tag
nome.textContent = "Agatha Helena Silva Monteiro" // vai colocar por cima do HTML, antes oq era "Nome de Usuário" virou esse novo texto (meu nome)

const imgAluno = document.querySelector('#foto-perfil')
imgAluno.setAttribute('src', 'https://i.pinimg.com/474x/e7/81/dd/e781dd9c8be51d8225948f15b5b2555d.jpg')

const corPerfil = document.querySelector("#container-perfil")
const corFonte = document.querySelector("#container-perfil")
const corBio = document.querySelector(".biografia")
corPerfil.style.backgroundColor = '#586382'
corFonte.style.color = '#ffffff'
corBio.style.color = '#ffffff'

const badge = document.querySelector('#badge-status')
const status = document.querySelector('#badge-status')

badge.classList.add('online')
status.textContent = "Status: Ativo"

const skills = document.querySelectorAll('.skill')
console.log("Total de skills:", skills.length)