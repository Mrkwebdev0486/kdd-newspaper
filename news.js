const menuButton = document.querySelector('#second-nav-btn');
const navLinks = document.querySelector('.second-nav-list');
const searchPage = document.getElementById('searchPage');

let menuOpen = false;


searchPage.addEventListener('keyup', e =>{
    let currentValue = e.target.value.toLowerCase();
 let authors = document.querySelectorAll('.grid-heading')
 authors.forEach(author => {
    if(author.textContent.toLowerCase().includes(currentValue)){
        author.parentNode.style.display = 'block';
    } else {
author.parentNode.style.display = 'none';
    }
 })
})



menuButton.addEventListener('click', () =>{
    if(menuOpen == false) {
        navLinks.classList.add('visible')
        menuOpen = true;
    } else{
       navLinks.classList.remove('visible')
        menuOpen = false;
    }
})
