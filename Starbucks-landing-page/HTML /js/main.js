// Author: Kyan Keise
// Date: 06/05/22
// Title: Starbucks landing page


// Declare Vaiables 
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')


// Controls the side Mobile Navigation Menu

function navToggle() {
btn.classList.toggle('open')
nav.classList.toggle('hidden')
document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)
