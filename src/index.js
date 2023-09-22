
const el = document.querySelector(".hamburger")
const menulist = document.querySelector(".dropdown")

function test(){

  el.classList.toggle('ON')
  menulist.classList.toggle('ON')
}

el.addEventListener('click', test)