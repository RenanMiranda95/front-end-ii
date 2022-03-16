const body = document.querySelector('body');
const formulario = document.querySelector('form');

let nomeAvatar = document.querySelector('#nome');
let descricaoAvatar = document.querySelector('#descricao');
let fotoAvatar = document.querySelector('#foto');

const secaoAvatar = document.createElement('div');

body.appendChild(secaoAvatar)
secaoAvatar.setAttribute('class', 'secaoAvatar');

formulario.addEventListener('submit', (e) => {

    let divAvatar = document.createElement('div');
    let botaoFechar = document.createElement('button');
    let img = document.createElement('img');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    secaoAvatar.appendChild(divAvatar);
    divAvatar.setAttribute('class', 'boxAvatar');

    divAvatar.appendChild(botaoFechar);
    botaoFechar.setAttribute('class', 'btFechar');

    divAvatar.appendChild(img);
    divAvatar.appendChild(h3);
    divAvatar.appendChild(p);

    img.setAttribute('src',fotoAvatar.value)
    h3.innerHTML = nomeAvatar.value;
    p.innerHTML = descricaoAvatar.value;

    botaoFechar.addEventListener('click', () => {
            
        secaoAvatar.removeChild(divAvatar)

    });
    
    e.preventDefault();
    });
