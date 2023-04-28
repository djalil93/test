let myimage = document.querySelector('img'); 

myimage.addEventListener('click', function() {
    let mysrc = myimage.getAttribute('src');
    if (mysrc === 'images/firefox-icon.png') {
        myimage.setAttribute('src', 'images/firefox2.png');
    } else {
        myimage.setAttribute('src', 'images/firefox-icon.png');
    }

});

let bouton = document.querySelector('button')
let titre = document.querySelector('h1')

function username(){
    let name = prompt('Saisir un nom: ');
    localStorage.setItem('nom', name);
    titre.textContent = 'Mozilla is cool ' + name;
}

if (!localStorage.getItem('nom')){
    username();
} else {
    let storedName = localStorage.getItem('nom');
    titre.textContent = 'Mozilla is cool ' + storedName;
}

bouton.addEventListener('click', function(){
    username();
})