
const toggle = document.getElementById('toggle')
const container = document.getElementById('navbar')
const nav = document.getElementById('openUl')

let check = true

const action = () => {
  if (check) {
    container.style.height = '200px'
    openUl.style.transform = 'translateY(15%)'
    check = !check
  } else {
    container.style.height = '70px'
    openUl.style.transform = 'translateY(-200%)'
    check = !check
  }
}

toggle.addEventListener('click', action)